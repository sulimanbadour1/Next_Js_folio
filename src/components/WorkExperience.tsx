"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/Data/types";
import {
  bobcat,
  inno,
  kazanexpress,
  provectus,
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
} from "../../public";

type Props = {};
const experiences: Experience[] = [
  {
    title: "Front-End Developer",
    company_name: "Doosan Bobcat",
    icon: bobcat,
    iconBg: "#ea401d",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Collaborated with cross-functional teams to define, design, and ship new web applications and features.",
      " Designed 3D models and integrated them into the company's website. ",
      " Designed UI & UX in collaboration with engineering & design teams. ",
      "Participated in user testing and research to gain insights into user behavior.",
    ],
    icons: [Figma, Js, ReactJs, Tailwind, Git], // Replace with actual technology icons
  },
  {
    title: "Web Developer",
    company_name: "Innopolis Design Lab",
    icon: inno,
    iconBg: "#41ba21",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Designed UI & UX in collaboration with engineering & design teams.",
      " Designed and modeled 3d products, made animations to add them to company projects.",
    ],
    icons: [Figma, Js, ReactJs, Ts, Next, Tailwind], // Replace with actual technology icons
  },

  {
    title: "Product Designer",
    company_name: "Provectus",
    icon: provectus, // Replace with the actual image path
    iconBg: "#ffffff",
    date: "Apr 2021 - Dec 2021",
    points: [
      "Worked as a UI/UX designer on one of Provectus internal projects, Communicated with the product managers and the stakeholders weekly.",
      "Designed new features from scratch and revamped old ones to cope with the standards of the current market.",
    ],
    icons: [Figma, HtmlIcon, CssIcon, Js], // Replace with actual technology icons
  },
  {
    title: "UI/UX Designer",
    company_name: "Kazan Express",
    icon: kazanexpress, // Replace with the actual image path
    iconBg: "#ff1919",
    date: "Mar 2020 - Dec 2020",
    points: [
      "Executed Visual redesign of web applications and marketing for +20 new product categories (Shoes, plus-size).",
      "Designed posters and various social media content for multiple clients.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
    icons: [Figma, HtmlIcon, CssIcon, BootIcon], // Replace with actual technology icons
  },
];

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left
    md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[8px] text-gray-500 text-2xl">
        Work Experience.
      </h3>
      <div className="w-full flex space-x-2 overflow-x-scroll pt-8 snap-x snap-mandatory  ">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
