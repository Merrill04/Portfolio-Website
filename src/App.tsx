import { useRef } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import AboutSection from "./components/Aboutsection";
import ProjectsSection from "./components/ProjectsSection";
import PastQualificationsection from "./components/PastQualificationsection";
import CertificationAndAchievementsSection from "./components/CertificationAndAchievementsSection";
import ConnectAndGrowSection from "./components/ConnectAndGrowSection";

function App() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const certificationRef = useRef<HTMLDivElement>(null);
    const qualificationRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Navbar
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                certificationRef={certificationRef}
                qualificationRef={qualificationRef}
            />

            <Herosection />

            <div ref={aboutRef}>
                <AboutSection />
            </div>

            <div ref={projectsRef}>
                <ProjectsSection />
            </div>

            <div ref={certificationRef}>
                <CertificationAndAchievementsSection />
            </div>

            <div ref={qualificationRef}>
                <PastQualificationsection />
            </div>

            <ConnectAndGrowSection />
        </>
    );
}

export default App;
