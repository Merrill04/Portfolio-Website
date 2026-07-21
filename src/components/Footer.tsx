import { useState, useEffect } from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export default function Footer({ onOpenTerminal }: FooterProps) {
  const [uptimeSeconds, setUptimeSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030408] text-white py-12 px-6 border-t border-gray-800/80 font-mono text-xs relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Uptime */}
        <div className="space-y-1 text-center md:text-left">
          <p className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <span>Merrill Dmonte</span>
            <span className="text-gray-500">|</span>
            <span className="text-cyan-400">Software Developer</span>
          </p>
          <div className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Session Uptime: {uptimeSeconds}s</span>
            <span>• Built with React 19 & Tailwind CSS</span>
          </div>
        </div>

        {/* Developer Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-950/60 border border-gray-800 hover:border-cyan-500/40 text-gray-300 hover:text-cyan-300 flex items-center gap-1.5 transition"
            title="Launch Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>CLI Terminal</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 transition"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-900 text-center text-gray-600 text-[11px]">
        © {new Date().getFullYear()} Merrill Dmonte. Designed & Engineered for High Impact.
      </div>
    </footer>
  );
}
