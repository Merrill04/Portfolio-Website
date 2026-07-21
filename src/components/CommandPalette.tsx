import React, { useState, useEffect, useRef } from 'react';
import { Search, User, Code, FolderGit2, Award, GraduationCap, Mail, FileText, Terminal, X, ExternalLink } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (section: string) => void;
  onOpenTerminal: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onNavigateSection,
  onOpenTerminal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const actions = [
    {
      id: 'about',
      label: 'Go to About Me',
      description: 'Overview, background, and video intro',
      icon: <User className="w-4 h-4 text-blue-400" />,
      perform: () => {
        onNavigateSection('about');
        onClose();
      },
    },
    {
      id: 'skills',
      label: 'Explore Tech Skills',
      description: 'Languages, frameworks, databases & tools',
      icon: <Code className="w-4 h-4 text-cyan-400" />,
      perform: () => {
        onNavigateSection('about');
        onClose();
      },
    },
    {
      id: 'projects',
      label: 'View Projects Gallery',
      description: 'E-Waste, URL Shortener, Bank System, Translator',
      icon: <FolderGit2 className="w-4 h-4 text-purple-400" />,
      perform: () => {
        onNavigateSection('projects');
        onClose();
      },
    },
    {
      id: 'certifications',
      label: 'View Certifications',
      description: 'Credly badges, AWS & Industry credentials',
      icon: <Award className="w-4 h-4 text-yellow-400" />,
      perform: () => {
        onNavigateSection('certification');
        onClose();
      },
    },
    {
      id: 'qualification',
      label: 'Academic Timeline',
      description: 'BE Computer Engineering, 12th & 10th grades',
      icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        onNavigateSection('qualification');
        onClose();
      },
    },
    {
      id: 'terminal',
      label: 'Launch Developer CLI Terminal',
      description: 'Interactive command line prompt (~)',
      icon: <Terminal className="w-4 h-4 text-green-400" />,
      perform: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'resume',
      label: 'Download Resume (PDF)',
      description: 'Download Merrill Dmonte Resume',
      icon: <FileText className="w-4 h-4 text-pink-400" />,
      perform: () => {
        window.open('/Merrill_Resume.pdf', '_blank');
        onClose();
      },
    },
    {
      id: 'email',
      label: 'Copy Email Address',
      description: 'merrilldmonte04@gmail.com',
      icon: <Mail className="w-4 h-4 text-blue-400" />,
      perform: () => {
        navigator.clipboard.writeText('merrilldmonte04@gmail.com');
        alert('Email copied to clipboard!');
        onClose();
      },
    },
    {
      id: 'github',
      label: 'Open GitHub Profile',
      description: 'github.com/Merrill04',
      icon: <ExternalLink className="w-4 h-4 text-gray-400" />,
      perform: () => {
        window.open('https://github.com/Merrill04', '_blank');
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter(
    (action) =>
      action.label.toLowerCase().includes(query.toLowerCase()) ||
      action.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].perform();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#0f141e] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-800 bg-[#161c28]">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or section name... (e.g. Projects, Skills, Resume)"
            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
          />
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-white rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-4 text-center text-sm text-gray-500">No matching commands found</div>
          ) : (
            filteredActions.map((action, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={action.id}
                  onClick={action.perform}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${
                    isSelected ? 'bg-blue-600/20 border border-blue-500/40 text-white' : 'hover:bg-gray-800/50 text-gray-300'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-gray-900 border border-gray-800 shrink-0">
                    {action.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{action.label}</p>
                    <p className="text-xs text-gray-400 truncate">{action.description}</p>
                  </div>
                  {isSelected && <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">↵ Enter</span>}
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="bg-[#121722] px-4 py-2 border-t border-gray-800 flex items-center justify-between text-[11px] text-gray-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-cyan-400 font-semibold">Merrill Dmonte Portfolio</span>
        </div>
      </div>
    </div>
  );
}
