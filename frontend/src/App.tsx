import { MatrixBackground } from "./components/MatrixBackground";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import profileImg from "./assets/profile.png";

export default function App() {
  console.log(
    `%cHey Dev Curioso! 👀\n\nQuer ver como eu construí esse site e quem sabe se inspirar?\nVisita meu GitHub: https://github.com/emmanuelmarllon`,
    "color: #0ff; background: #222; font-size: 16px; padding: 10px; border-radius: 5px; font-family: monospace;"
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection
          name="M.Emanuel"
          title="Fullstack Web Developer"
          imageUrl={profileImg}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-50"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
