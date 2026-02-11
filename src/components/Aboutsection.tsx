import { motion } from "framer-motion";

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

export default function AboutSection() {


    const skills = {
        Languages: ["Java", "Python", "JavaScript", "C", "C++", "HTML", "CSS", "TypeScript"],
        "Frameworks & Libraries": ["React JS", "Next JS", "Tailwind CSS", "Express JS", "Node JS"],
        Databases: ["MySQL", "MongoDB", "PostgreSQL"],
        "Cloud & DevOps": ["AWS", "Git", "Docker"],
        "Other Skills": ["OOPM", "UI/UX Basics"],
    };

    return (
        <section className="w-full min-h-screen bg-black bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-6 py-20 relative">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex flex-col gap-8">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition"
                    >
                        <h2 className="text-3xl font-bold mb-4 bg-linear-to-r text-blue-400 bg-clip-text">
                            About Me
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am a computer engineering student passionate about building software solutions that create real-world
                            impact. I enjoy exploring new tools and technologies and continuously improving my problem-solving
                            skills through hands-on projects. I am driven by the idea of using technology to benefit people and
                            the environment. I thrive in collaborative team environments and am eager to learn, contribute, and
                            grow as a developer. Beyond technology, I value an active lifestyle and enjoy playing sports to stay
                            fit. I also love exploring nature, especially mountainous regions, which keeps me inspired and motivated.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex items-center justify-center shadow-xl hover:scale-[1.02] transition overflow-hidden"
                    >
                        <video
                            src="/video.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-xl h-fit"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h3>

                    <div className="space-y-4">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <p className="text-sm uppercase tracking-wider text-gray-400 mb-3">{category}</p>

                                <div className="flex flex-wrap gap-4">
                                    {items.map((skill) => (
                                        <motion.div
                                            key={skill}
                                            whileHover={{ scale: 1.2 }}
                                            className="w-16 h-16 bg-gray-800 rounded-full border border-gray-700 cursor-pointer relative flex items-center justify-center hover:shadow-lg transition"
                                        >
                                            {Devicon[skill] && (
                                                <img src={Devicon[skill]} alt={skill} className="w-8 h-8" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}