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
      "<h1> Hi, I'm Suli </h1>",
      "< Frontend_Developer.jsx />",
      "<h2> Product_Designer.css </h2>",
      "<> Design_Engineer.Phd </>",
      "<h3> Based in Prague.tsx </h3>",
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
          <span className="mr-3 text-xl mt-2 md:text-4xl">{text}</span>
          <Cursor cursorColor="#fff" />
        </h1>
        <div className="pt-8 pb-36 ">
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
      </div>
    </div>
  );
}

export default Hero;
