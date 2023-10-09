"use client";
import React from "react";
import { motion } from "framer-motion";
import SkillsCard from "./Card/Skill";
import { Skill } from "@/Data/types";
import {
  Js,
  Ts,
  ReactJs,
  Next,
  Tailwind,
  Figma,
  Git,
  CssIcon,
  HtmlIcon,
  BootIcon,
  ThreeJs,
  docker,
  nodeJs,
  NextJs,
  blender,
  photoshop,
} from "../../public";
type Props = {};

const skills: Skill[] = [
  {
    title: "HTML 5",
    icon: HtmlIcon,
    date: "70%",
  },
  {
    title: "CSS 3",
    icon: CssIcon,
    date: "75%",
  },
  {
    title: "JavaScript",
    icon: Js,
    date: "65%",
  },
  {
    title: "TypeScript",
    icon: Ts,
    date: "70%",
  },
  {
    title: "React Js",
    icon: ReactJs,
    date: "80%",
  },
  {
    title: "Tailwind CSS",
    icon: Tailwind,
    date: "85%",
  },
  {
    title: "ShadnCn UI",
    icon: BootIcon,
    date: "60%",
  },
  {
    title: "Three Js",
    icon: ThreeJs,
    date: "60%",
  },
  {
    title: "Figma",
    icon: Figma,
    date: "80%",
  },
  {
    title: "git",
    icon: Git,
    date: "70%",
  },
  {
    title: "docker",
    icon: docker,
    date: "75%",
  },
  {
    title: "NodeJs",
    icon: nodeJs,
    date: "60%",
  },
  {
    title: "Next Js",
    icon: NextJs,
    date: "70%",
  },
  {
    title: "Blender",
    icon: blender,
    date: "70%",
  },
  {
    title: "Photoshop",
    icon: photoshop,
    date: "70%",
  },
];

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center mx-auto   md:text-left xl:flex-row max-w-[2000px]
  xl:px-10 min-h-screen justify-center items-center xl:space-y-0 md:pb-12"
    >
      <h3 className="absolute top-32 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12">
        Skills.
      </h3>
      <h3 className="absolute pt-8 top-36 uppercase tracking-[3px] text-gray-200 text-sm">
        My Tech stack.
      </h3>
      <div className="m-8 grid grid-cols-6 gap-5 ">
        {skills.map((skill, index) => (
          <SkillsCard key={`skills-${index}`} skills={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
