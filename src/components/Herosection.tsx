import { useState, useEffect } from 'react';
import { Download, ArrowRight, Terminal as TerminalIcon, Code2, Database, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HerosectionProps {
  onOpenTerminal?: () => void;
  onExploreProjects?: () => void;
}

export default function Herosection({ onOpenTerminal, onExploreProjects }: HerosectionProps) {
  const images = [
    "/profile1.jpeg",
    "/profile2.jpeg",
    "/profile3.jpeg",
    "/profile4.jpeg",
    "/profile5.jpeg"
  ];

  const roles = [
    "Full Stack Developer",
    "Backend Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isClickAnimating, setIsClickAnimating] = useState(false);

  // Rotate roles every 3.2 seconds
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);

    const imageTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(roleTimer);
      clearInterval(imageTimer);
    };
  }, [roles.length, images.length]);

  const handleImageClick = () => {
    setIsClickAnimating(true);
    setImageIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsClickAnimating(false), 400);
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#05070c] bg-grid-pattern text-white px-6 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Text Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Open for Software Developer Roles & Internships</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
              Hi, I'm <span className="text-gradient">Merrill Dmonte</span> 👋
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="h-14 flex items-center">
              <p className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 flex items-center">
                <span>Building&nbsp;</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="text-pink-400 underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="terminal-cursor" />
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Bachelor of Computer Engineering Graduate interested in building high-performance web applications, scalable REST APIs, and intelligent AI tools. Driven by elegant architecture, clean code, and real-world impact.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 py-4 max-w-xl">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <div className="text-2xl font-bold text-cyan-400 font-mono">6+</div>
              <div className="text-xs text-gray-400">Projects Built</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <div className="text-2xl font-bold text-pink-400 font-mono">8.01</div>
              <div className="text-xs text-gray-400">BE CGPA</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
              <div className="text-2xl font-bold text-emerald-400 font-mono">5</div>
              <div className="text-xs text-gray-400">Certifications</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <a
              href="/Merrill_Resume.pdf"
              download
              className="px-6 py-3.5 rounded-xl bg-linear-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onExploreProjects}
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm flex items-center gap-2 backdrop-blur-md transition-all duration-300 hover:border-cyan-400"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </button>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="px-5 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-2 transition"
                title="Launch CLI Terminal"
              >
                <TerminalIcon className="w-4 h-4 text-cyan-400" />
                <span>CLI Mode</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Profile & Tech Orbit Card */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative group">
            {/* Floating Tech Badges Around Profile */}
            <div className="absolute -top-4 -left-4 z-20 p-3 rounded-2xl bg-gray-900/90 border border-blue-500/40 shadow-xl backdrop-blur-md animate-float">
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="absolute top-1/2 -right-6 z-20 p-3 rounded-2xl bg-gray-900/90 border border-purple-500/40 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: '1.5s' }}>
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <div className="absolute -bottom-4 left-1/4 z-20 p-3 rounded-2xl bg-gray-900/90 border border-emerald-500/40 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: '2.5s' }}>
              <Cpu className="w-6 h-6 text-emerald-400" />
            </div>

            {/* Glowing Gradient Border Avatar Frame */}
            <div
              onClick={handleImageClick}
              className={`cursor-pointer relative p-1 rounded-full bg-linear-to-r from-blue-500 via-pink-500 to-cyan-400 bg-size-[200%_200%] animate-gradientMove shadow-2xl transition-all duration-300 ${isClickAnimating ? 'scale-95 rotate-3' : 'hover:scale-[1.03]'
                }`}
            >
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-black border-4 border-black relative">
                <img
                  src={images[imageIndex]}
                  alt="Merrill Dmonte"
                  className="w-full h-full object-cover transition-opacity duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>

              {/* Click Hint Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-mono text-cyan-300 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                Click photo to change ({imageIndex + 1}/{images.length})
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
