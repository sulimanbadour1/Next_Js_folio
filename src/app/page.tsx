"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Projects1 from "@/components/Projects1";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import Logo from "../../public/logos/black.png";
import Image from "next/image";
import StarsCanvas from "@/components/canvas/Stars";
export default function Home() {
  return (
    <div
      className="bg-[#050816] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar
  scrollbar-track-gray-300 scrollbar-thumb-[#5d509f]"
    >
      <section id="header" className="snap-proximity">
        <Header />
      </section>
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

      <Link href="#header">
        <footer className="sticky bottom-4 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div
              className="w-10 h-10 md:h-12 md:w-12 bg-gray-200/50 rounded-full filter  grayscale-100
              hover:bg-white cursor-pointer transition-all duration-300 ease-in-out"
            >
              <Image
                src={Logo}
                alt="SB Logo"
                className="w-10 h-10 md:h-12 md:w-12 object-contain rounded-full mx-auto"
              />
            </div>
          </div>
        </footer>
        {/* <StarsCanvas /> */}
      </Link>
      <section className="snap-proximity -mt-8">
        <Footer />
      </section>
    </div>
  );
}
