import { useState } from 'react';
import type { Project } from '../types/portfolio';
import ProjectModal from './ProjectModal';
import { Github, Search, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projectsData: Project[] = [
  {
    id: 'e-waste',
    title: 'E-Waste Facility Locator',
    description: 'A Next.js platform to locate nearby e-waste recycling centers with AI-based credit prediction and eco-incentive scoring.',
    longDescription: 'A web platform designed to streamline electronic waste recycling. It features real-time geolocation mapping for nearest drop-off points and an integrated AI/ML model predicting recycling credit rewards based on item weight, condition, and category.',
    category: 'Full Stack',
    techStack: ['Next.js', 'Tailwind CSS', 'AI/ML', 'Maps API', 'TypeScript'],
    githubLink: 'https://github.com/Merrill04/E-Waste-Facility-Locator',
    architectureHighlights: [
      'Interactive maps integration for nearest facility routing',
      'AI model for estimating credit points on recycled hardware',
      'Responsive Next.js 14 App Router layout with dynamic UI components',
    ],
  },
  {
    id: 'url-shortener',
    title: 'URL Shortening Service',
    description: 'High-performance RESTful URL shortening microservice with custom short codes, analytics, Redis caching, and PostgreSQL storage.',
    longDescription: 'Scalable backend system for URL shortening built with Node.js and Express. Implements Redis caching for low-latency redirections, JWT authentication for user link management, click rate analytics, and custom URL alias creation.',
    category: 'Backend & APIs',
    techStack: ['Node.js', 'Express.js', 'Redis', 'PostgreSQL', 'JWT', 'REST API'],
    githubLink: 'https://github.com/Merrill04/URL_Shortener',
    architectureHighlights: [
      'Redis cache layer for achieving faster response times',
      'PostgreSQL schema with optimized indexing for link click analytics',
      'JWT payload verification',
    ],
  },
  {
    id: 'todo-list',
    title: 'Todo-List App',
    description: 'A full-stack Todo application built with a clean monorepo structure.',
    longDescription: ' Todo List App with a Typescript + Express Backend and A React + Tailwind Frontend with Postgres SQL database Integration. Features JWT-based authentication, per-user todo management, and a modern dark UI.',
    category: 'Full Stack',
    techStack: ['Node.js', 'Express.js', 'React JS', 'PostgreSQL', 'JWT', 'REST API'],
    githubLink: 'https://github.com/Merrill04/Todo_List',
    architectureHighlights: [
      'A full stack application which manages the users day to day task',
      'PostgreSQL schema with two tables users and todos',
      'JWT payload verification',
    ],
  },
  {
    id: 'bank-system',
    title: 'Bank Management System',
    description: 'Desktop banking application built using Java and Swing for customer account creation, transaction logging, and database management.',
    longDescription: 'Comprehensive desktop enterprise application managing core banking procedures including account creation, fund transfers, balance checking, and PIN security with MySQL persistence.',
    category: 'Desktop & Systems',
    techStack: ['Java', 'Java Swing', 'DBMS', 'MySQL', 'OOP'],
    githubLink: 'https://github.com/Merrill04/Bank-Management-System',
    architectureHighlights: [
      'Modular Object-Oriented Java software architecture',
      'MySQL database connections via JDBC with transaction safety',
      'Custom Swing GUI forms for tellers and account holders',
    ],
  },
  {
    id: 'immigration-translator',
    title: 'Immigration Translator Offline',
    description: 'Completely offline speech-to-speech translation pipeline for Hindi ↔ English built for high privacy immigration interactions.',
    longDescription: 'Privacy-focused speech translation software designed to work without internet connectivity. Converts spoken audio into text, translates between Hindi and English using local ML models, and outputs natural synthesized speech.',
    category: 'AI & ML',
    techStack: ['Python', 'FastAPI', 'Offline Speech AI', 'PyTorch'],
    githubLink: 'https://github.com/Merrill04/Immigration_Translation_Project',
    architectureHighlights: [
      'Zero external network dependencies ensuring complete data privacy',
      'FastAPI server handling audio buffer streams',
      'Seamless Hindi ↔ English Whisper/TTS pipeline execution',
    ],
  },
  {
    id: 'astronomical-events',
    title: 'Astronomical Events Portal',
    description: 'Interactive celestial events tracker for astronomy enthusiasts with Node.js database connectivity and PostgreSQL storage.',
    longDescription: 'Web portal keeping users informed on meteor showers, eclipses, and planetary alignments. Features event calendar tracking and community discussion posts stored in a PostgreSQL database.',
    category: 'Full Stack',
    techStack: ['HTML5', 'CSS3', 'Express', 'JavaScript', 'Node.js', 'PostgreSQL'],
    githubLink: 'https://github.com/Merrill04/Astronomical-Events-Website',
    architectureHighlights: [
      'Relational schema mapping upcoming celestial occurrences',
      'Vanilla JavaScript DOM rendering for fast lightweight load times',
      'Node.js REST endpoint for fetching astronomical schedules',
    ],
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio Web App',
    description: 'Dynamic, modern software developer-centric portfolio featuring an interactive CLI terminal, command palette, and smooth UI animations.',
    longDescription: 'Custom built portfolio showcasing system engineering skills, interactive CLI mode, search command palette (Ctrl+K), and responsive glassmorphism aesthetic built with React 19, Vite, and Tailwind CSS.',
    category: 'Frontend',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubLink: 'https://github.com/Merrill04/Portfolio-Website',
    architectureHighlights: [
      'Interactive CLI Terminal emulator with custom bash commands',
      'Global keyboard command palette shortcut handler',
      'Responsive design system with HSL Tailwind styling',
    ],
  },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = ['All', 'Full Stack', 'Backend & APIs', 'AI & ML', 'Desktop & Systems', 'Frontend'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section className="relative w-full py-24 bg-[#05070c] bg-dots-pattern text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Projects & <span className="text-gradient">Systems</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Curated software applications highlighting REST API design, AI integration, database architecture, and frontend engineering.
          </p>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl">
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or tech..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-gray-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid vs Carousel View Mode */}
          <div className="hidden lg:flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-gray-800 text-xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition ${
                viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`p-1.5 rounded-lg transition ${
                viewMode === 'carousel' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
              title="Carousel View"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects Display Area */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center text-gray-500 font-mono">
            No projects found matching your search query.
          </div>
        ) : viewMode === 'grid' ? (
          /* Grid View Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-0.5 overflow-hidden bg-black flex flex-col h-full"
              >
                {/* Neon Gradient Border Hover Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #ec4899, #3b82f6)',
                    backgroundSize: '200% 200%',
                  }}
                />

                <div className="relative flex-1 bg-[#0a0d16] rounded-[23px] p-6 flex flex-col justify-between border border-gray-800/80 group-hover:border-transparent transition">
                  <div className="space-y-4">
                    {/* Header: Category & Inspector trigger */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                        {project.category}
                      </span>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs text-gray-400 hover:text-cyan-300 font-mono flex items-center gap-1 transition"
                      >
                        Details <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-2xl font-bold text-white group-hover:text-cyan-300 cursor-pointer transition"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: GitHub & Live links */}
                  <div className="pt-6 mt-4 border-t border-gray-800/60 flex items-center justify-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/50 transition flex items-center gap-2 text-xs font-mono"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold transition flex items-center gap-1.5"
                    >
                      <span>Architecture</span>
                      <Code2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Carousel View Layout */
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-[#0a0d16] border border-cyan-500/40 rounded-3xl p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300">
                  {filteredProjects[currentIndex].category}
                </span>
                <span className="text-xs font-mono text-gray-500">
                  {currentIndex + 1} of {filteredProjects.length}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white">{filteredProjects[currentIndex].title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {filteredProjects[currentIndex].description}
              </p>

              <div className="flex flex-wrap gap-2">
                {filteredProjects[currentIndex].techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                <a
                  href={filteredProjects[currentIndex].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gray-900 border border-gray-700 text-white font-semibold text-sm flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Code</span>
                </a>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-white/5 border border-gray-700 hover:border-cyan-400 text-white transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-white/5 border border-gray-700 hover:border-cyan-400 text-white transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Detailed Architecture Inspector Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}