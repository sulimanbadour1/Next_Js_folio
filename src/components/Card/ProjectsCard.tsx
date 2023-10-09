"use client";
import React, { use } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Project } from "@/Data/types";
import github from "../../../public/github.png";
import Image from "next/image";
interface ProjectsCardProps {
  projects: Project;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#151030] p-8 rounded-2xl sm:w-[360px] w-full border-gray-100 border-opacity-5 border-1"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={projects.image}
            alt={projects.title}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(projects.source_code, "_blank")}
            >
              <Image
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-3 ">
          <h3 className=" mt-2 font-semibold text-base">{projects.title}</h3>
          <p className="mt-2 font-light text-sm">{projects.description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectsCard;
