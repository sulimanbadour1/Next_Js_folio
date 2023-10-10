import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Projects1 from "@/components/Projects1";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div
      className="bg-[#050816] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar
  scrollbar-track-gray-300 scrollbar-thumb-[#5d509f]"
    >
      <Header />
      <section id="hero" className="snap-proximity">
        <Hero />
      </section>
      <section id="about" className="snap-proximity">
        <About />
      </section>
      <section id="experience" className="snap-proximity mt-5">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-proximity mt-5">
        <Skills />
      </section>
      <section id="projects" className="snap-proximity mt-5">
        <Projects />
      </section>
      <section id="projects1" className="snap-proximity mt-5">
        <Projects1 />
      </section>
      <section id="contact" className="snap-proximity mt-5">
        <Contact />
      </section>
    </div>
  );
}
