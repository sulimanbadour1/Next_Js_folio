"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { Skill } from "@/Data/types";

interface SkillsCardProps {
  skills: Skill;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="group relative flex cursor-pointer"
    >
      <Image
        src={skills.icon}
        alt={skills.title}
        className="w-14 h-14 rounded-full border object-cover border-gray-400
        filter  group-hover:grayscale transition duration-200 ease-in-out 
        md:w-18 md:h-18 xl:w-20 xl:h-20"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-200 
        ease-in-out group-hover:bg-gray-300 w-14 h-14 rounded-full z-0
        md:w-18 md:h-18 xl:w-20 xl:h-20"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-base font-bold text-black opacity-100">
            {skills.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
