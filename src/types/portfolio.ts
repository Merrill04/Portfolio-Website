export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Backend & APIs' | 'AI & ML' | 'Desktop & Systems' | 'Frontend';
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  featured?: boolean;
  architectureHighlights?: string[];
}

export interface Qualification {
  title: string;
  institution: string;
  duration: string;
  grade: string;
  learnings: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeUrl: string;
  link: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
}
