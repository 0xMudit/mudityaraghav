import BackgroundFX from "@/components/background-fx";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Highlights from "@/components/sections/highlights";
import Projects from "@/components/sections/projects";
import Research from "@/components/sections/research";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen">
      <BackgroundFX />
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Research />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
