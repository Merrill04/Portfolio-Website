import React, { useState, useEffect } from 'react';

type NavbarProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  certificationRef: React.RefObject<HTMLDivElement | null>;
  qualificationRef: React.RefObject<HTMLDivElement | null>;
  activeSection: string;
};

export default function Navbar({
  aboutRef,
  projectsRef,
  certificationRef,
  qualificationRef,
  activeSection,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const navItems = [
    { id: 'about', label: 'About & Skills', ref: aboutRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'certifications', label: 'Certifications', ref: certificationRef },
    { id: 'qualifications', label: 'Qualifications', ref: qualificationRef },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand / Dev Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-75 group-hover:opacity-100 blur-xs transition duration-300 animate-pulse" />
            <img
              src="/devlogo.jpg"
              alt="Logo"
              className="relative w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-black"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm hidden group-has-[[style*='display: none']]:flex">
              MD
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-base md:text-lg text-white group-hover:text-cyan-300 transition">
              <span>Merrill Dmonte</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <p className="text-xs font-mono text-cyan-400/80 tracking-wide">
              Backend Developer
            </p>
          </div>
        </button>

        {/* Desktop Floating Navigation Pills */}
        <div className="hidden lg:flex items-center p-1 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-xl">
          <ul className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.ref)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${isActive
                        ? 'text-white bg-linear-to-r from-blue-600/80 to-purple-600/80 shadow-md shadow-blue-500/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
