"use client";
import React, { use } from "react";
type Props = {};

export default function Contact({}: Props) {
  return (
    <div
      className="h-screen flex relative flex-col items-center
     text-center md:text-left md:flex-rowmax-w-6xl mx-auto p-10 justify-evenly"
    >
      <h3 className="absolute top-32 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12">
        Get in touch
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">Contact.</h4>
        <div></div>
      </div>
    </div>
  );
}
