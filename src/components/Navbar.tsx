type NavbarProps = {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    certificationRef: React.RefObject<HTMLDivElement | null>;
    qualificationRef: React.RefObject<HTMLDivElement | null>;
};

export default function Navbar({
    aboutRef,
    projectsRef,
    certificationRef,
    qualificationRef,
}: NavbarProps) {

    const scrollToSection = (
        ref: React.RefObject<HTMLDivElement | null>
    ) => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };


    return (
        <nav className="bg-black p-4 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white">
                    <button className="flex text-lg font-bold items-center gap-3">
                        <img
                            src="/devlogo.jpg"
                            alt="Logo"
                            className="h-12 w-12 rounded-full"
                        />
                        <div className="flex flex-col leading-tight">
                            <span className="text-xl font-bold">Merrill Dmonte</span>
                            <span className="text-sm text-blue-200">
                                Software Developer
                            </span>
                        </div>
                    </button>
                </div>

                <div className="p-0.5 rounded-xl bg-linear-to-r from-blue-500 via-pink-500 to-green-500 
            animate-gradient-x">
                    <div className="bg-black rounded-xl px-8 py-4">
                        <ul className="text-white flex space-x-10">
                            {[
                                { label: "About", ref: aboutRef },
                                { label: "Skills", ref: aboutRef },
                                { label: "Projects", ref: projectsRef },
                                { label: "Certifications", ref: certificationRef },
                                { label: "Past Qualifications", ref: qualificationRef },
                            ].map((item) => (
                                <li key={item.label}>
                                    <button
                                        onClick={() => scrollToSection(item.ref)}
                                        className="relative font-medium transition duration-300
                       after:absolute after:left-0 after:-bottom-1
                       after:h-0.5 after:w-0 after:bg-white
                       after:transition-all after:duration-300
                       hover:after:w-full"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}
