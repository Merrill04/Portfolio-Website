import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, FileCode, Sparkles } from 'lucide-react';

const Devicon: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "React JS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next JS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node JS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express JS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  OOPM: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "UI/UX Basics": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
};

interface SkillItem {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Databases' | 'Cloud & DevOps' | 'Other Skills';
  level: 'Advanced' | 'Proficient' | 'Exploring';
}

const allSkills: SkillItem[] = [
  { name: 'Java', category: 'Languages', level: 'Advanced' },
  { name: 'Python', category: 'Languages', level: 'Exploring' },
  { name: 'JavaScript', category: 'Languages', level: 'Proficient' },
  { name: 'TypeScript', category: 'Languages', level: 'Proficient' },
  { name: 'C', category: 'Languages', level: 'Proficient' },
  { name: 'C++', category: 'Languages', level: 'Advanced' },
  { name: 'HTML', category: 'Languages', level: 'Advanced' },
  { name: 'CSS', category: 'Languages', level: 'Advanced' },
  { name: 'React JS', category: 'Frameworks & Libraries', level: 'Exploring' },
  { name: 'Next JS', category: 'Frameworks & Libraries', level: 'Exploring' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', level: 'Exploring' },
  { name: 'Express JS', category: 'Frameworks & Libraries', level: 'Proficient' },
  { name: 'Node JS', category: 'Frameworks & Libraries', level: 'Proficient' },
  { name: 'MySQL', category: 'Databases', level: 'Proficient' },
  { name: 'PostgreSQL', category: 'Databases', level: 'Proficient' },
  { name: 'MongoDB', category: 'Databases', level: 'Proficient' },
  { name: 'AWS', category: 'Cloud & DevOps', level: 'Proficient' },
  { name: 'Git', category: 'Cloud & DevOps', level: 'Advanced' },
  { name: 'Docker', category: 'Cloud & DevOps', level: 'Proficient' },
  { name: 'OOPM', category: 'Other Skills', level: 'Advanced' },
];

export default function AboutSection() {
  const [viewMode, setViewMode] = useState<'story' | 'code'>('story');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Frameworks & Libraries', 'Databases', 'Cloud & DevOps', 'Other Skills'];

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const jsonConfigString = `{
  "developer": {
    "name": "Merrill Dmonte",
    "degree": "B.E. Computer Engineering (2022 - 2026)",
    "cgpa": "8.01 / 10.0",
    "location": "India",
    "passions": [
      "Scalable Systems",
      "Full-Stack Web Development"
      "Clean Code Architecture"
    ],
    "interests": [
      "Fitness & Sports",
      "Mountain Trekking & Nature",
      "Open-Source Projects"
    ],
    "availability": "Open for Full-time Roles & Internships"
  }
}`;

  return (
    <section className="w-full min-h-screen bg-[#05070c] text-white py-24 px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Profile & Skillset</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-gradient">Merrill</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Exploring technology, engineering solutions, and mastering modern tools.
          </p>
        </div>

        {/* About Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Bio Card with Story vs Code Toggle */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
              {/* Header with View Toggle */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                  <Code className="w-6 h-6 text-blue-400" />
                  <span>Developer Profile</span>
                </h3>
                <div className="flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-gray-800 text-xs font-mono">
                  <button
                    onClick={() => setViewMode('story')}
                    className={`px-3 py-1.5 rounded-lg transition ${viewMode === 'story' ? 'bg-blue-600 text-white font-bold' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    Story View
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${viewMode === 'code' ? 'bg-cyan-600 text-white font-bold' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>merrill.config.json</span>
                  </button>
                </div>
              </div>

              {/* View Mode Content */}
              {viewMode === 'story' ? (
                <div className="text-gray-300 leading-relaxed text-base space-y-4">
                  <p>
                    I am a Bachelor of Engineering Graduate passionate about building software solutions that create real-world impact. I enjoy exploring new tools and technologies and continuously improving my problem-solving skills through hands-on projects.
                  </p>
                  <p>
                    I am driven by the idea of using technology to benefit people such as building AI-assisted e-waste locators and high-throughput backend services.
                  </p>
                  <p>
                    Beyond technology, I value an active lifestyle, playing sports to stay fit, and trekking through mountainous regions which keeps me inspired and motivated.
                  </p>
                </div>
              ) : (
                <div className="bg-[#090c14] p-4 rounded-xl border border-gray-800 font-mono text-xs text-cyan-300 overflow-x-auto">
                  <pre>{jsonConfigString}</pre>
                </div>
              )}
            </div>

            {/* IDE-Styled Video Container */}
            <div className="bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
              {/* Mac-style Window Controls Header */}
              <div className="bg-[#121724] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs font-mono text-gray-400">demo_overview.mp4</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400">Media Player</span>
              </div>
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <video
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Skills Matrix */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Tech Stack</h3>
                <p className="text-xs text-gray-400">Searchable Skills & Tools</p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                {filteredSkills.length} Skills
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. React, Node, Docker)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition ${activeCategory === cat
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'bg-white/5 text-gray-400 hover:text-white border border-transparent'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid of Skill Cards */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3 max-h-[420px] overflow-y-auto pr-1">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-2xl bg-black/50 border border-gray-800 hover:border-cyan-500/50 flex flex-col items-center justify-center text-center gap-2 group transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center p-1 rounded-xl bg-gray-900 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                    {Devicon[skill.name] ? (
                      <img src={Devicon[skill.name]} alt={skill.name} className="w-7 h-7 object-contain" />
                    ) : (
                      <Code className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-gray-200 group-hover:text-cyan-300 truncate w-full">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 px-1.5 py-0.5 rounded bg-white/5">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}