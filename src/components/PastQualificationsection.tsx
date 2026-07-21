import { useState } from 'react';
import { ChevronDown, GraduationCap, BookOpen, CheckCircle } from 'lucide-react';

type Qualification = {
  title: string;
  institution: string;
  duration: string;
  grade: string;
  learnings: string[];
};

const qualifications: Qualification[] = [
  {
    title: "B.E. Computer Engineering",
    institution: "Fr. Conceicao Rodrigues College Of Engineering, Bandra",
    duration: "2022 – 2026",
    grade: "CGPA: 8.01 / 10.0",
    learnings: [
      "Data Structures & Algorithms",
      "Full-Stack Web Development",
      "Database Management Systems",
      "Operating Systems & Networks",
      "Machine Learning & AI",
      "Software Engineering Architecture"
    ],
  },
  {
    title: "Higher Secondary Education (12th Science)",
    institution: "State Board of Secondary & Higher Secondary Education",
    duration: "2021 – 2022",
    grade: "Percentage: 70%",
    learnings: [
      "Physics & Advanced Mathematics",
      "C++ Object-Oriented Programming",
      "Analytical & Problem Solving Fundamentals",
    ],
  },
  {
    title: "Secondary Education (10th)",
    institution: "State Board of Secondary Education",
    duration: "2019 – 2020",
    grade: "Percentage: 91.20%",
    learnings: [
      "Mathematics & Logical Reasoning",
      "Science Fundamentals",
      "Communication Skills"
    ],
  },
];

export default function PastQualificationsection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-[#05070c] text-white py-24 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 text-xs font-mono">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Qualifications & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Academic foundation and specialized computer engineering coursework shaping my software development mindset.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4">
          {qualifications.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-3xl bg-slate-900/60 border border-gray-800 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Header Toggle Bar */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none transition group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-mono mt-0.5">{item.institution}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                          {item.duration}
                        </span>
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400">
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-6 h-6 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-pink-400" : ""
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-gray-800/60 space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 font-mono">
                      <BookOpen className="w-4 h-4" />
                      <span>Key Learnings & Mastered Skills</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.learnings.map((learning, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-black/50 border border-gray-800 text-sm text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}