"use client";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import Image from "next/image";
import ProfilePic from "../../public/assets/Cesky.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<h1> Hi, I'm Suliman </h1>",
      "< Frontend_Developer.jsx />",
      "<h2> Product Designer </h2>",
      "<h3> Design Engineer.Phd </h3>",
      "<h3> Based in Prague. </h3>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8  items-center justify-center
    text-center overflow-hidden "
    >
      <BackGroundCircles />
      <Image
        className="relative rounded-full h-36 w-36 mx-auto object-cover"
        src={ProfilePic}
        alt="Suliman"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[10px]">
          Suliman Badour
        </h2>
        <h1 className="text-3xl lg:text-5xl font-semibold px-10">
          <span className="mr-3 text-xl ">{text}</span>
          <Cursor cursorColor="#fff" />
        </h1>
        <div className="pt-8 ">
          <Link href="#about">
            <button className="heroButton mr-2"> About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton mr-2">Work</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton mr-2">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton  ">Projects</button>
          </Link>
        </div>
        {/* // Scrolling down */}
        {/* <div className=" w-full flex justify-center items-center pt-6">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 dark:border-white">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-white mb-4 "
              />
            </div>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
