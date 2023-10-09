"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./Card/ProjectsCard";
import { Project } from "@/Data/types";
import {
  folio,
  betteraskpdf,
  NorthFace,
  mosaic,
  shirt,
  littlelemon,
} from "../../public/index";
type Props = {};
const projects: Project[] = [
  {
    title: "Better Ask PDF",
    description:
      " SAAS product designed to empower users by allowing them to upload and interactively engage with PDF files. Leveraging the power of Next.js, Tailwind CSS, NeonDB, Stripe, and OpenAI.",
    image: betteraskpdf,
    source_code: "https://github.com/sulimanbadour1/betteraskpdf",
  },
  {
    title: "The North Face App",
    description:
      "An e-commerce mobile app for the brand The North Face, which allows users to browse the latest products, order and checkout. Also, It allow tracking the order and get notifications.",
    image: NorthFace,
    source_code: "https://www.behance.net/gallery/141974421/3D-Mosaic",
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "A full responsive website for a restaurant in Prague, which allows users to browse the menu, reserve a table  order and checkout. Also, it has a dashboard for the restaurant owners.",
    image: littlelemon,
    source_code: "https://github.com/sulimanbadour1/Meta_Capstone_Project",
  },
  {
    title: "3D portfolio",
    description:
      "A 3d portfolio created using vite, three js and three drei. with contact me form and resume download. Integrated with GSAP for animations, and react-three-fiber for 3d rendering.",
    image: folio,
    source_code: "https://github.com/sulimanbadour1/My_new_portfolio",
  },

  {
    title: "Shirt Store AI",
    description:
      "Web-based platform that allows users to create and share their own custom t-shirt designs using DALL.E, change colors to save thier own choosen design, and order them for printing and delivery.",
    image: shirt,
    source_code: "https://github.com/sulimanbadour1/AI_shirt_SAAS_3js",
  },
  {
    title: "3D Mosaic",
    description:
      "E-Commerce Website for a Furniture Company which helps users to try, Scan its products in 3D via AR technology and take orders from clients, build products as the customer needs.",
    image: mosaic,
    source_code: "https://www.behance.net/gallery/141974421/3D-Mosaic",
  },
];
function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center mx-auto   md:text-left xl:flex-col  max-w-[2000px]
  xl:px-10 min-h-screen justify-center items-center xl:space-y-0 md:pb-12"
    >
      <h3 className="absolute top-32 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12">
        Projects.
      </h3>

      <h3 className="absolute pt-12 top-36 uppercase tracking-[3px] text-gray-200 text-sm">
        My work
      </h3>
      <p className="relative text-base top-40 sm:pl-0 md:pl-20 max-w-6xl p-16 text-gray-200 ">
        I have worked on a variety of projects, ranging from 3d modelling to
        UI/UX and software development. Here are a few of my favourites. Each
        project is breifly described and links to the source code are provided.
        It reflects my passion for learning new technologies, and my love for
        building things.
      </p>
      <div className="mt-20 flex flex-wrap gap-7 justify-center pt-40">
        {projects.map((project, index) => (
          <ProjectsCard key={`projects-${index}`} projects={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
