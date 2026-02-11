import { useState, useEffect } from "react";

export default function Herosection() {
  const images = [
    "/profile1.jpeg",
    "/profile2.jpeg",
    "/profile3.jpeg",
    "/profile4.jpeg",
    "/profile5.jpeg"
  ];

  const handleConnect = () => {
    window.location.href = 'https://www.linkedin.com/in/merrill-dmonte-546b62351/';
  };


  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  },);

  const handleImageClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setAnimate(false);
    }, 300);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black text-white px-10 section-with-overlay"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm Merrill 👋 <br />
            <span className="text-blue-400">
              Full Stack Developer
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Building scalable systems & impactful products.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
            >
              Download Resume
            </a>
            <button
              onClick={handleConnect}
              className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
            >
              Connect With Me
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div
            onClick={handleImageClick}
            className={`cursor-pointer transition-all duration-300 ${animate ? "scale-90 rotate-6" : "scale-100"
              }`}
          >
            <div className="p-0.5 rounded-full bg-size-[200%_200%] animate-gradient bg-linear-to-r from-pink-500 via-purple-500 to-blue-500">
              <img
                src={images[index]}
                alt="Profile"
                className="w-90 h-90 object-cover rounded-full bg-black transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
