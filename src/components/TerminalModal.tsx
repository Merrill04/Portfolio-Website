import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (section: string) => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export default function TerminalModal({ isOpen, onClose, onNavigateSection }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      if (history.length === 0) {
        setHistory([
          {
            command: 'welcome',
            output: (
              <div className="space-y-2 text-gray-300">
                <p className="text-cyan-400 font-mono font-bold">
                  🚀 Merrill OS Terminal v2.5 [Interactive CLI]
                </p>
                <p className="text-sm">
                  Type <span className="text-yellow-400 font-semibold">'help'</span> to see available commands or click a shortcut below.
                </p>
              </div>
            ),
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-sm text-gray-300">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-yellow-400 font-mono">whoami / about</span> - Summary of developer profile</div>
              <div><span className="text-yellow-400 font-mono">skills</span> - List technical skills & tools</div>
              <div><span className="text-yellow-400 font-mono">projects</span> - View featured projects</div>
              <div><span className="text-yellow-400 font-mono">stats</span> - View LeetCode & academic stats</div>
              <div><span className="text-yellow-400 font-mono">contact</span> - Display contact details</div>
              <div><span className="text-yellow-400 font-mono">clear</span> - Clear terminal history</div>
              <div><span className="text-yellow-400 font-mono">sudo hire</span> - Executive recommendation prompt</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        output = (
          <div className="text-sm text-gray-300 space-y-1">
            <p className="text-blue-400 font-bold">Merrill Dmonte | Computer Engineering Student (BE 2022-2026)</p>
            <p>Full-Stack & Backend Developer skilled in Node.js, Express, Java, Python, PostgreSQL, and React.</p>
            <p className="text-gray-400">Passionate about building scalable systems, APIs, and high-impact applications.</p>
          </div>
        );
        onNavigateSection('about');
        break;

      case 'skills':
        output = (
          <div className="text-sm space-y-1">
            <p className="text-green-400 font-semibold">Technical Skills Overview:</p>
            <p><span className="text-cyan-400">Languages:</span> Java, Python, JavaScript, TypeScript, C, C++, HTML, CSS</p>
            <p><span className="text-cyan-400">Frameworks:</span> React.js, Next.js, Node.js, Express.js, Tailwind CSS</p>
            <p><span className="text-cyan-400">Databases & Tools:</span> PostgreSQL, MongoDB, MySQL, Redis, AWS, Docker, Git</p>
          </div>
        );
        onNavigateSection('skills');
        break;

      case 'projects':
        output = (
          <div className="text-sm space-y-2 text-gray-300">
            <p className="text-purple-400 font-semibold">Featured Work:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="text-yellow-300 font-bold">E-Waste Facility Locator:</span> Next.js + AI/ML credit prediction</li>
              <li><span className="text-yellow-300 font-bold">URL Shortener:</span> Node.js + Express + Redis + PostgreSQL + JWT</li>
              <li><span className="text-yellow-300 font-bold">Bank Management System:</span> Java Swing + MySQL</li>
              <li><span className="text-yellow-300 font-bold">Immigration Translator:</span> Offline Python + Speech-to-Speech AI</li>
            </ul>
          </div>
        );
        onNavigateSection('projects');
        break;

      case 'stats':
        output = (
          <div className="text-sm space-y-1 text-gray-300">
            <p className="text-cyan-400 font-semibold">Developer Metrics:</p>
            <p>• CGPA: <span className="text-green-400 font-bold">8.01</span> (B.E. Computer Engineering)</p>
            <p>• Projects Built: <span className="text-yellow-400 font-bold">6+ Full Stack & System Apps</span></p>
            <p>• Industry Badges: <span className="text-purple-400 font-bold">5 Credly Certifications</span></p>
            <p>• Profiles: LeetCode | Codeforces | HackerRank | GitHub</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-sm space-y-1">
            <p className="text-cyan-400 font-bold">Connect with Merrill:</p>
            <p>Email: <a href="mailto:merrilldmonte04@gmail.com" className="text-blue-400 underline">merrilldmonte04@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/merrill-dmonte-546b62351/" target="_blank" rel="noreferrer" className="text-blue-400 underline">merrill-dmonte</a></p>
            <p>GitHub: <a href="https://github.com/Merrill04" target="_blank" rel="noreferrer" className="text-blue-400 underline">github.com/Merrill04</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo hire':
      case 'hire':
        output = (
          <div className="p-3 bg-blue-950/60 border border-blue-500/40 rounded-lg text-sm space-y-2">
            <p className="text-yellow-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Great Choice! Merrill is currently available for Software Developer roles & Internships.
            </p>
            <p className="text-gray-300">
              Reach out via LinkedIn or email to discuss opportunities or collaborative projects.
            </p>
            <a
              href="https://www.linkedin.com/in/merrill-dmonte-546b62351/"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-3 py-1 bg-blue-500 text-white rounded text-xs font-semibold hover:bg-blue-600 transition"
            >
              Contact on LinkedIn →
            </a>
          </div>
        );
        break;

      default:
        output = (
          <p className="text-red-400 text-sm">
            Command not recognized: '<span className="font-mono">{cmd}</span>'. Type <span className="text-yellow-400">'help'</span> for a list of commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        command: input,
        output,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full ${
          isMaximized ? 'h-[92vh] max-w-7xl' : 'max-w-3xl h-[520px]'
        } bg-[#0c1017] border border-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300`}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#161b26] px-4 py-3 border-b border-gray-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition" title="Close" />
              <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition" title="Resize" />
              <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition" title="Minimize" />
            </div>
            <span className="ml-3 text-xs text-gray-400 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              merrill@portfolio: ~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="text-gray-400 hover:text-white p-1 rounded transition"
              title="Clear terminal"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="text-gray-400 hover:text-white p-1 rounded transition"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Shortcuts */}
        <div className="bg-[#0f141f] px-4 py-2 border-b border-gray-800/60 flex items-center gap-2 overflow-x-auto text-xs font-mono scrollbar-none">
          <span className="text-gray-500 shrink-0">Quick Cmds:</span>
          {['help', 'whoami', 'skills', 'projects', 'stats', 'sudo hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                setTimeout(() => {
                  const form = document.getElementById('terminal-form') as HTMLFormElement;
                  form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                }, 50);
              }}
              className="px-2 py-0.5 rounded bg-gray-800/70 hover:bg-blue-600/30 text-gray-300 hover:text-cyan-300 border border-gray-700/50 transition shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body Output */}
        <div
          className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-4 text-gray-200"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="text-green-400 font-bold">merrill@portfolio</span>
                <span className="text-gray-600">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-gray-300 font-semibold">$ {item.command}</span>
                <span className="ml-auto text-[10px] text-gray-600">{item.timestamp}</span>
              </div>
              <div className="pl-4 border-l border-gray-800">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <form id="terminal-form" onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-green-400 font-bold text-xs">merrill@portfolio</span>
            <span className="text-gray-600 text-xs">:</span>
            <span className="text-cyan-400 text-xs">~</span>
            <span className="text-gray-400 text-xs font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-cyan-300 focus:outline-none font-mono text-sm"
              placeholder="Type a command (e.g. 'help', 'skills', 'hire')..."
              autoFocus
            />
            <button type="submit" className="text-gray-500 hover:text-cyan-400">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
