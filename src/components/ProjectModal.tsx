import type { Project } from '../types/portfolio';
import { X, Github, ExternalLink, Cpu, CheckCircle, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0d121c] border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6 relative overflow-hidden text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>{project.category}</span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-white tracking-tight">{project.title}</h3>
          <p className="text-gray-300 text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* System Architecture / Key Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="space-y-3 p-4 rounded-2xl bg-black/50 border border-gray-800">
            <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2 font-mono">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>System Architecture & Features</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-5 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
