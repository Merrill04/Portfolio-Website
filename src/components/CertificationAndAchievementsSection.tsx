import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeUrl: string;
  link: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Career Essentials in Cybersecurity',
    issuer: 'Microsoft & LinkedIn',
    badgeUrl: "https://images.credly.com/size/680x680/images/fcafd0c9-42da-4703-a191-0c397203dc1b/blob",
    link: "https://www.credly.com/badges/45c44869-cab8-4939-8b91-c09f757f9271/print",
  },
  {
    id: '2',
    title: 'Python for IT & Software Development',
    issuer: 'Credly / Cisco',
    badgeUrl: "https://images.credly.com/size/680x680/images/6ff76b93-852c-4f9e-a73a-fc10424a1007/blob",
    link: "https://www.credly.com/badges/fc175e0e-153b-406a-9a43-0c6eab65094a/print",
  },
  {
    id: '3',
    title: 'Cloud & Infrastructure Essentials',
    issuer: 'Credly Verified',
    badgeUrl: "https://images.credly.com/size/680x680/images/7b3f119b-ada8-4ff6-817a-f2a8bbb7fe97/blob",
    link: "https://www.credly.com/badges/fe12770e-cdf8-4168-b747-1b6c2cf32f09/public_url",
  },
  {
    id: '4',
    title: 'Full Stack Web Fundamentals',
    issuer: 'Credly Verified',
    badgeUrl: "https://images.credly.com/size/680x680/images/683b2e3c-0d28-42a2-ab84-7203a209f9d0/blob",
    link: "https://www.credly.com/badges/46bf9b49-2363-4d3a-bac1-6d214b74e0b6/public_url",
  },
  {
    id: '5',
    title: 'Software Development & Systems',
    issuer: 'Credly Verified',
    badgeUrl: "https://images.credly.com/size/680x680/images/f53c1eb6-d93d-4b9e-ae34-922046f6b15c/image.png",
    link: "https://www.credly.com/badges/9e5e46c9-c731-4d2a-95ca-3233fe09eb0f/public_url",
  },
];

export default function CertificationSection() {
  return (
    <section className="relative bg-[#05070c] text-white py-24 px-6 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Certifications & <span className="text-gradient">Badges</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Verified technical badges demonstrating proficiency in cybersecurity, cloud infrastructure, Python, and full-stack software development.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center p-6 rounded-3xl bg-slate-900/60 border border-gray-800 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Badge Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 mb-4 flex items-center justify-center p-2 rounded-2xl bg-black/60 border border-gray-800 group-hover:border-cyan-400 transition">
                <img
                  src={cert.badgeUrl}
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain filter drop-shadow-lg"
                />
              </div>

              {/* Title & Issuer */}
              <h3 className="text-sm font-bold text-center text-gray-200 group-hover:text-cyan-300 transition line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-[11px] font-mono text-gray-500 mt-1">{cert.issuer}</p>

              {/* Verified Tag */}
              <div className="mt-4 flex items-center gap-1 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3" />
                <span>Credly Verified</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}