"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center mx-auto   md:text-left xl:flex-row max-w-[2000px]
  xl:px-10 min-h-screen justify-center items-center xl:space-y-0"
    >
      <h3 className="absolute top-28 uppercase tracking-[8px] text-gray-500 text-2xl">
        Skills.
      </h3>
      <h3 className="absolute pt-4 top-36 uppercase tracking-[3px] text-gray-400 text-sm">
        My Tech stack.
      </h3>
    </motion.div>
  );
}

export default Skills;
