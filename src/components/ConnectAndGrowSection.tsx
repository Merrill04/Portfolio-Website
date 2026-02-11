import { Github, Instagram, Linkedin, Code2, Trophy, Terminal } from "lucide-react";

export default function ConnectAndGrowSection() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Merrill04",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/merrill-dmonte-546b62351/",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/merrill_dmonte?igsh=MWo3eWVnOHU5djk3cw==",
    },
  ];

  const learningLinks = [
    {
      name: "HackerRank",
      icon: <Terminal className="w-6 h-6" />,
      url: "https://www.hackerrank.com/profile/merrilldmonte",
    },
    {
      name: "LeetCode",
      icon: <Code2 className="w-6 h-6" />,
      url: "https://leetcode.com/u/merrilldmonte/",
    },
    {
      name: "Codeforces",
      icon: <Trophy className="w-6 h-6" />,
      url: "https://codeforces.com/profile/Merrill04",
    },
  ];

  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600 mb-3">
            Connect & Grow With Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let’s collaborate, share ideas, and keep growing together.
            You can find my work, journey, and learning progress below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600 mb-6">Social Platforms</h3>
            <ul className="space-y-4">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-green-400">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600 mb-6">Learning Platforms</h3>
            <ul className="space-y-4">
              {learningLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-blue-400">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
