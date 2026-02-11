'use client';

import { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
};

const projects: Project[] = [
  {
    title: "E-Waste Facility Locator",
    description:
      "A Next.js platform to locate nearby e-waste recycling centers with AI-based credit prediction.",
    techStack: ["Next.js", "Tailwind", "AI/ML", "Maps API"],
    githubLink: "https://github.com/Merrill04/E-Waste-Facility-Locator",
  },
  {
    title: "Bank-Management-System",
    description:
      "All in one desktop application using Java and Swing for managing banking operations.",
    techStack: ["Java", "Java-Swing", "DBMS", "MYSQL"],
    githubLink: "https://github.com/Merrill04/Bank-Management-System",
  },
  {
    title: "Astronomical Events Website",
    description:
      "A simple Astronomical Events Website made using HTML, CSS, Javascript, NodeJS (For Database Connectivity), Postgres SQL (Database).",
    techStack: ["HTML", "CSS", "Javascript", "Postgres SQL"],
    githubLink: "https://github.com/Merrill04/Astronomical-Events-Website",
  },
  {
    title: "Immigration Translator Offline",
    description:
      "A completely offline speech-to-speech translation system for Hindi ↔ English.",
    techStack: ["Python", "FastAPI", "AI"],
    githubLink: "https://github.com/Merrill04/Immigration_Translation_Project",
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlay(false);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-widest bg-clip-text text-white uppercase">
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-blue-400 mb-4 tracking-tight">
            Projects That Matter
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated selection of innovative solutions showcasing problem-solving skills,
            system design thinking, and a passion for building software that creates real impact.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleProjects.map((project, idx) => (
              <div
                key={idx}
                className="group h-full perspective"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <div className="relative h-full rounded-2xl p-0.5 overflow-hidden bg-black">
                  <div
                    className="absolute inset-0 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #ec4899, #3b82f6)',
                      animation: 'spin 6s linear infinite',
                    }}
                  />

                  <div className="relative h-full bg-linear-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-6 flex flex-col border border-gray-800">
                    <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-5 leading-relaxed grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-linear-to-r from-blue-500/20 to-pink-500/20 text-gray-300 font-medium border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto items-center">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/btn p-2 rounded-lg transition-all duration-300 hover:scale-110"
                        title="GitHub Repository"
                      >
                        <div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #ec4899, #3b82f6)',
                            animation: 'spin 4s linear infinite',
                            padding: '1px',
                          }}
                        />
                        <div className="relative bg-black rounded-lg p-2 flex items-center justify-center">
                          <Github size={18} className="text-gray-300 group-hover/btn:text-blue-400 transition-colors duration-300" />
                        </div>
                      </a>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-blue-500/80 to-pink-500/80 text-white text-sm font-semibold hover:from-blue-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ml-auto"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="group/nav p-3 rounded-full bg-white/5 backdrop-blur-xl border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Previous projects"
              >
                <ChevronLeft size={24} className="text-white group-hover/nav:text-blue-400 transition-colors" />
              </button>
              <button
                onClick={handleNext}
                className="group/nav p-3 rounded-full bg-white/5 backdrop-blur-xl border border-gray-700 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                aria-label="Next projects"
              >
                <ChevronRight size={24} className="text-white group-hover/nav:text-pink-400 transition-colors" />
              </button>
            </div>

            <div className="flex gap-2 items-center">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                      ? 'w-8 bg-linear-to-r from-blue-500 to-pink-500'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10 text-gray-300 text-sm font-medium transition-all duration-300 hover:text-cyan-400"
            >
              {isAutoPlay ? '⏸ Pause' : '▶ Play'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .perspective {
          perspective: 1000px;
        }

        @media (max-width: 768px) {
          section {
            padding: 60px 16px;
          }
        }
      `}</style>
    </section>
  );
}