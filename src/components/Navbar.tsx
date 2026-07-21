import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Search, Menu, X } from 'lucide-react';

type NavbarProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  certificationRef: React.RefObject<HTMLDivElement | null>;
  qualificationRef: React.RefObject<HTMLDivElement | null>;
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
  activeSection: string;
};

export default function Navbar({
  aboutRef,
  projectsRef,
  certificationRef,
  qualificationRef,
  onOpenTerminal,
  onOpenCommandPalette,
  activeSection,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    setMobileMenuOpen(false);
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

        {/* Action Controls (Terminal & Command Palette) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-mono transition group"
            title="Search & Quick Commands"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-black/60 border border-gray-700 rounded text-gray-400">
              Ctrl+K
            </kbd>
          </button>

          {/* Interactive CLI Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition group"
            title="Open Interactive Terminal"
          >
            <TerminalIcon className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition" />
            <span>Terminal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400"
            title="Terminal"
          >
            <TerminalIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-gray-800 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.ref)}
                  className="w-full text-left py-2 text-gray-300 hover:text-cyan-400 text-lg font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-gray-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm font-mono text-gray-300"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Search Command Palette (Ctrl+K)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-950/60 border border-cyan-500/40 rounded-xl text-sm font-mono text-cyan-300"
            >
              <TerminalIcon className="w-4 h-4 text-cyan-400" />
              <span>Launch Interactive Terminal</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
