import { Navbar } from "../components/Navbar";
import { StartBackground } from "../components/StartBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";

export const Home = () => {

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StartBackground />
            
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <Skills />
                <Projects />
                <Contacts />
            </main>

            {/* Footer */ }

        </div>
    );
};