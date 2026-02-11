import { useState } from "react";
import { ChevronDown, Award, BookOpen, Sparkles } from "lucide-react";

type Qualification = {
  title: string;
  duration: string;
  grade: string;
  learnings: string[];
};

const qualifications: Qualification[] = [
  {
    title: "B.E. Computer Engineering",
    duration: "2022 – 2026",
    grade: "CGPA: 7.97",
    learnings: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning"
    ],
  },
  {
    title: "Higher Secondary Education (12th)",
    duration: "2021 – 2022",
    grade: "Percentage: 70%",
    learnings: [
      "Physics & Mathematics",
      "C++ Programming",
      "Analytical Problem Solving",
    ],
  },
  {
    title: "Secondary Education (10th)",
    duration: "2019 – 2020",
    grade: "Percentage: 91.20%",
    learnings: [
      "Mathematics",
      "Logical Reasoning",
      "Science Fundamentals",
    ],
  },
];

const PastQualificationsection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-4 md:px-12 overflow-hidden">
      <style>{`
        @keyframes borderColorRotate {
          0% { border-color: rgb(96, 165, 250); }
          33% { border-color: rgb(244, 114, 182); }
          66% { border-color: rgb(34, 197, 94); }
          100% { border-color: rgb(96, 165, 250); }
        }
        .animate-border-rotate {
          animation: borderColorRotate 6s linear infinite;
        }
        .animate-border-rotate-delay-1 {
          animation: borderColorRotate 6s linear infinite;
          animation-delay: 2s;
        }
        .animate-border-rotate-delay-2 {
          animation: borderColorRotate 6s linear infinite;
          animation-delay: 4s;
        }
      `}</style>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-400"></div>
            <Award className="w-6 h-6 text-blue-400" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-400"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Past Qualifications
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            My educational journey showcasing academic excellence and comprehensive skill development.
            A progression of milestones that reflect my commitment to continuous learning and growth.
          </p>
        </div>

        <div className="space-y-5">
          {qualifications.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-xl opacity-75 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-xl animate-pulse"></div>
                </div>

                <div className={`relative rounded-xl backdrop-blur-sm bg-linear-to-br from-blue-500/5 via-transparent to-cyan-500/5 overflow-hidden transition-all duration-300 ${index === 0 ? 'animate-border-rotate' :
                    index === 1 ? 'animate-border-rotate-delay-1' :
                      'animate-border-rotate-delay-2'
                  } border-2 hover:bg-linear-to-br hover:from-blue-500/10 hover:via-blue-500/5 hover:to-cyan-500/10`}>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 rounded-xl blur animate-pulse"></div>
                  </div>

                  <button
                    onClick={() => toggleAccordion(index)}
                    className="relative w-full flex items-center justify-between px-8 py-6 focus:outline-none transition-all duration-300 group/btn"
                  >
                    <div className="flex items-center gap-4 flex-1 text-left">
                      <div className="p-3 rounded-lg bg-linear-to-br from-blue-500/20 to-cyan-500/20 group-hover/btn:from-blue-500/40 group-hover/btn:to-cyan-500/40 transition-all duration-300">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover/btn:text-blue-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover/btn:text-gray-300 transition-colors duration-300 mt-1">
                          {item.duration}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 text-blue-400 shrink-0 transition-all duration-500 group-hover/btn:text-cyan-400 ${isOpen ? "rotate-180 text-cyan-400" : ""
                        }`}
                    />
                  </button>

                  <div className={`h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

                  <div
                    className={`relative px-8 transition-all duration-500 ease-out overflow-hidden ${isOpen ? "max-h-96 py-8 opacity-100" : "max-h-0 py-0 opacity-0"
                      }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-linear-to-br from-cyan-500/20 to-blue-500/20 shrink-0 mt-1">
                          <Sparkles className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 font-medium">Academic Performance</p>
                          <p className="text-lg font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-1">
                            {item.grade}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-300 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-cyan-400"></span>
                          Key Learnings & Skills
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.learnings.map((learning, i) => (
                            <div
                              key={i}
                              className="group/item flex items-center gap-3 px-4 py-2.5 rounded-lg bg-linear-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/50 hover:bg-linear-to-r hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 shrink-0 group-hover/item:scale-150 transition-transform duration-300"></span>
                              <span className="text-sm text-gray-300 group-hover/item:text-cyan-300 transition-colors duration-300">
                                {learning}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/3 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default PastQualificationsection;