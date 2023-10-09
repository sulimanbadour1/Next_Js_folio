import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#151030] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
    </div>
  );
}
