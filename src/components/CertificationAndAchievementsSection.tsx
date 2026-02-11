interface Certification {
  badgeUrl: string;
  link: string;
}

const certifications: Certification[] = [
  {
    badgeUrl:
      "https://images.credly.com/size/680x680/images/fcafd0c9-42da-4703-a191-0c397203dc1b/blob",
    link: "https://www.credly.com/badges/45c44869-cab8-4939-8b91-c09f757f9271/print",
  },
  {
    badgeUrl:
      "https://images.credly.com/size/680x680/images/6ff76b93-852c-4f9e-a73a-fc10424a1007/blob",
    link: "https://www.credly.com/badges/fc175e0e-153b-406a-9a43-0c6eab65094a/print",
  },
  {
    badgeUrl:
      "https://images.credly.com/size/680x680/images/7b3f119b-ada8-4ff6-817a-f2a8bbb7fe97/blob",
    link: "https://www.credly.com/badges/fe12770e-cdf8-4168-b747-1b6c2cf32f09/public_url",
  },
  {
    badgeUrl:
      "https://images.credly.com/size/680x680/images/683b2e3c-0d28-42a2-ab84-7203a209f9d0/blob",
    link: "https://www.credly.com/badges/46bf9b49-2363-4d3a-bac1-6d214b74e0b6/public_url",
  },
  {
    badgeUrl:
      "https://images.credly.com/size/680x680/images/f53c1eb6-d93d-4b9e-ae34-922046f6b15c/image.png",
    link: "https://www.credly.com/badges/9e5e46c9-c731-4d2a-95ca-3233fe09eb0f/public_url",
  },
];

const CertificationSection = () => {
  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000" />

      <div
        className={`transform transition-all duration-1000`}
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600 mb-3">
            Certifications
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full mx-auto" />
        </div>

        <div className=" bg-black border border-black rounded-2xl p-8 md:p-12">
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert: Certification, index: number) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 100}ms both`,
                }}
              >
                <div className="relative rounded-xl p-0.5 
      bg-linear-to-r from-blue-500 via-pink-500 to-green-500
      bg-size-[300%_300%]
      transition-all duration-500
      group-hover:animate-gradientMove">

                  <div className="bg-black rounded-xl p-1.5 
        transition-transform duration-300
        group-hover:scale-110 group-hover:-translate-y-2">
                    <img
                      src={cert.badgeUrl}
                      alt="Certification Badge"
                      className="w-28 md:w-36 rounded-lg"
                    />
                  </div>
                </div>
              </a>

            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s !important;
        }

        @keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradientMove {
  animation: gradientMove 3s ease infinite;
}

      `}</style>
    </section>
  );
};

export default CertificationSection;