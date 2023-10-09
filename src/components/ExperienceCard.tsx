import kazanexpress from "../../public/company/kazanexpress.png";
import provectus from "../../public/company/provectus.png";
import inno from "../../public/company/innopolis.png";
import bobcat from "../../public/company/bobcat.png";
import React from "react";
import { motion } from "framer-motion";
import Bobcat from "../../public/company/bobcat.png";
import Image from "next/image";

export default function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[400px] md:w=[700px] xl:w[800px] snap-center
    bg-[#36344328] p-6 hover:opacity-90 opacity-40 cursor-pointer transition-opacity duration-200
    overflow-hidden"
    >
      <Image
        src={Bobcat}
        alt="bobcat"
        className="w-20 h-20 rounded-full  xl:w-[100px] xl:h-[100px]
        object-cover object-top"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-1xl font-light">UI/UX Designer</h4>
        <p className="font-bold text-1xl mt-1">Kazan Express</p>
        <div className="flex space-x-2 my-2">
          <Image src={Bobcat} alt="bobcat" className="w-8 h-8 rounded-full" />
          <Image src={Bobcat} alt="bobcat" className="w-8 h-8  rounded-full" />
          <Image src={Bobcat} alt="bobcat" className="w-8 h-8  rounded-full" />
        </div>
        <p className="uppercase my-5 text-gray-300">Mar 2020 - Dec 2020</p>
        <ul className="list-disc space-y-2 ml-5 mr-4 text-sm">
          <li>
            Executed Visual redesign of web applications and marketing for +20
            new product categories (Shoes, plus-size).
          </li>
          <li>
            Designed posters and various social media content for multiple
            clients.
          </li>
          <li>
            Implemented responsive design and ensuring cross-browser
            compatibility.
          </li>
        </ul>
      </div>
    </article>
  );
}
