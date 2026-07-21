import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Code2, Trophy, Terminal, Mail, Send, Check, Copy, Sparkles } from 'lucide-react';

export default function ConnectAndGrowSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'merrilldmonte04@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const socialLinks = [
    {
      name: "GitHub",
      username: "@Merrill04",
      icon: <Github className="w-6 h-6 text-purple-400" />,
      url: "https://github.com/Merrill04",
      color: "hover:border-purple-500/50",
    },
    {
      name: "LinkedIn",
      username: "Merrill Dmonte",
      icon: <Linkedin className="w-6 h-6 text-blue-400" />,
      url: "https://www.linkedin.com/in/merrill-dmonte-546b62351/",
      color: "hover:border-blue-500/50",
    },
    {
      name: "Instagram",
      username: "@merrill_dmonte",
      icon: <Instagram className="w-6 h-6 text-pink-400" />,
      url: "https://www.instagram.com/merrill_dmonte?igsh=MWo3eWVnOHU5djk3cw==",
      color: "hover:border-pink-500/50",
    },
  ];

  const learningLinks = [
    {
      name: "LeetCode",
      username: "merrilldmonte",
      icon: <Code2 className="w-6 h-6 text-yellow-400" />,
      url: "https://leetcode.com/u/merrilldmonte/",
      badge: "Problem Solving",
    },
    {
      name: "Codeforces",
      username: "Merrill04",
      icon: <Trophy className="w-6 h-6 text-blue-400" />,
      url: "https://codeforces.com/profile/Merrill04",
      badge: "Competitive Coding",
    },
    {
      name: "HackerRank",
      username: "merrilldmonte",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      url: "https://www.hackerrank.com/profile/merrilldmonte",
      badge: "Algorithms & Java",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#05070c] text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Coding Profiles & <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Find my competitive programming activity, open-source work, or send a direct message to discuss software engineering roles.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Platforms */}
          <div className="bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
              <Linkedin className="w-6 h-6 text-blue-400" />
              <span>Social & Network</span>
            </h3>

            <div className="space-y-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-2xl bg-black/50 border border-gray-800 ${item.color} transition duration-300 hover:scale-[1.01]`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">{item.name}</p>
                      <p className="text-xs font-mono text-gray-400">{item.username}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">Visit →</span>
                </a>
              ))}
            </div>
          </div>

          {/* Competitive Programming Platforms */}
          <div className="bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span>Coding Platforms</span>
            </h3>

            <div className="space-y-3">
              {learningLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-black/50 border border-gray-800 hover:border-yellow-500/50 transition duration-300 hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-white text-base">{item.name}</p>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-yellow-950/60 text-yellow-300 border border-yellow-500/30">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-gray-400">{item.username}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">Profile →</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Direct Message Card */}
        <div className="max-w-3xl mx-auto bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl rounded-3xl p-6 md:p-10 space-y-6 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-sm text-gray-400">Have an opportunity or inquiry? Let's connect.</p>
            </div>

            {/* Quick Copy Email */}
            <button
              onClick={copyEmail}
              className="px-4 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-2 hover:bg-cyan-900/60 transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied!' : email}</span>
            </button>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-sm space-y-2">
              <p className="font-bold text-base flex items-center gap-2">
                <Check className="w-5 h-5" /> Message Received!
              </p>
              <p className="text-gray-300">
                Thank you, {formData.name}. I will get back to you shortly at {formData.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Merrill, I came across your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
