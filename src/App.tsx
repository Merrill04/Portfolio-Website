import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import AboutSection from './components/Aboutsection';
import ProjectsSection from './components/ProjectsSection';
import CertificationSection from './components/CertificationAndAchievementsSection';
import PastQualificationsection from './components/PastQualificationsection';
import ConnectAndGrowSection from './components/ConnectAndGrowSection';
import Footer from './components/Footer';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);
  const qualificationRef = useRef<HTMLDivElement>(null);
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

  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-cyan-500 selection:text-black relative">
      {/* Floating Glassmorphism Navbar */}
      <Navbar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        certificationRef={certificationRef}
        qualificationRef={qualificationRef}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Herosection />

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
      <Footer/>
    </div>
  );
}

export default App;
