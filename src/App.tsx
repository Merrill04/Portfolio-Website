import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import AboutSection from './components/Aboutsection';
import ProjectsSection from './components/ProjectsSection';
import CertificationSection from './components/CertificationAndAchievementsSection';
import PastQualificationsection from './components/PastQualificationsection';
import ConnectAndGrowSection from './components/ConnectAndGrowSection';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import CommandPalette from './components/CommandPalette';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);
  const qualificationRef = useRef<HTMLDivElement>(null);

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Active section scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      if (qualificationRef.current && scrollPos >= qualificationRef.current.offsetTop) {
        setActiveSection('qualifications');
      } else if (certificationRef.current && scrollPos >= certificationRef.current.offsetTop) {
        setActiveSection('certifications');
      } else if (projectsRef.current && scrollPos >= projectsRef.current.offsetTop) {
        setActiveSection('projects');
      } else if (aboutRef.current && scrollPos >= aboutRef.current.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hotkey Listeners (Ctrl+K and ~)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (e.key === '`' || e.key === '~') {
        if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSectionRef = (sectionId: string) => {
    switch (sectionId) {
      case 'about':
      case 'skills':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'certification':
      case 'certifications':
        certificationRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'qualification':
      case 'qualifications':
        qualificationRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-cyan-500 selection:text-black relative">
      {/* Floating Glassmorphism Navbar */}
      <Navbar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        certificationRef={certificationRef}
        qualificationRef={qualificationRef}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Herosection
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onExploreProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* About & Skills Section */}
      <div ref={aboutRef}>
        <AboutSection />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      {/* Certifications Section */}
      <div ref={certificationRef}>
        <CertificationSection />
      </div>

      {/* Educational Qualifications Section */}
      <div ref={qualificationRef}>
        <PastQualificationsection />
      </div>

      {/* Connect & Grow & Contact */}
      <ConnectAndGrowSection />

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Global Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigateSection={scrollToSectionRef}
      />

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigateSection={scrollToSectionRef}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />
    </div>
  );
}

export default App;
