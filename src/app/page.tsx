import Navbar from "@/components/navbar";
import Availability from "@/components/sections/availability";
import Profile from "@/components/sections/profile";
import Highlights from "@/components/sections/highlights";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Research from "@/components/sections/research";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-[#1d1d1f]">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-14">
        <Availability />
        <Profile />

        <hr />
        <Highlights />

        <hr />
        <Experience />

        <hr />
        <Projects />

        <hr />
        <Skills />

        <hr />
        <Education />

        <hr />
        <Research />

        <hr />
        <Contact />
      </main>
    </div>
  );
}