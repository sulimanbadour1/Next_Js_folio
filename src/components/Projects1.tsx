"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./Card/ProjectsCard";
import { Project1 } from "@/Data/types";
import { tenso, tripteron } from "../../public/index";
import ProjectsCard1 from "./Card/ProjectsCard1";
type Props = {};
const projects1: Project1[] = [
  {
    title: "TensDrone",
    description:
      "Tensodrone that do not break Tensodrone is a multi-rotor UAV of a new design with collision protection, made on the principle of tensegrity. This approach allows for the combination of the protective cage and the airframe in one structure, increasing impact resistance with less weight.",
    image: tenso,
    source_code: "https://youtu.be/4dEewzDinpA?si=7WFjcUC_CviAtYL7",
  },
  {
    title: "SpotRobot",
    description:
      "Spot Robot is a quadruped robot. It is a four-legged robot that can walk, run, and climb stairs. Spot is the first commercial robot to be able to climb stairs and traverse rough terrain. It is designed for indoor and outdoor operation and is waterproof and dustproof in all weathers.",
    image: tripteron,
    source_code: "https://www.youtube.com/channel/UCU2AGYmAQM4jw4wezPOFhIA",
  },
];
function Projects({}: Props) {
  return (
    <div
      className="flex relative flex-col text-center mx-auto   md:text-left xl:flex-col  max-w-[2000px]
  xl:px-10 min-h-screen justify-center items-center xl:space-y-0 md:pb-12"
    >
      <h3 className="absolute top-32 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12">
        My 3D Projects.
      </h3>

      <p className="relative text-base top-40 sm:pl-0 md:pl-20 max-w-6xl p-16 text-gray-200 ">
        I have worked as a Design Engineer in the field of 3D Printing, CAD/CAE
        and Robotics, and have designed and developed various 3D models and
        prototypes.
      </p>
      <div className="mt-20 flex flex-wrap gap-8 justify-center pt-40">
        {projects1.map((project, index) => (
          <ProjectsCard1 key={`projects-${index}`} projects={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
