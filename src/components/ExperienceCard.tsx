import kazanexpress from "../../public/company/kazanexpress.png";
import provectus from "../../public/company/provectus.png";
import inno from "../../public/company/innopolis.png";
import bobcat from "../../public/company/bobcat.png";
import React from "react";
import { motion } from "framer-motion";
import Bobcat from "../../public/company/bobcat.png";
import Image from "next/image";

type Props = {};

const ExperienceCard: React.FC<Props> = () => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
    md:w-[600px] xl:w-[900px] snap-center bg-[#3330474e] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.1 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full p-2 xl:w-[200px] xl:h-[200px] object-cover object-center justify-center"
        src={Bobcat.src}
        alt="bobcatlogo"
      />
      <div className="px-0 md:px-10 pt-6">
        <h4 className="text-2xl font-light">CEO</h4>
        <p className="font-bold text-xl mt-1">Bobcat</p>
        <div className="flex space-x-2 my-2">
          <Image
            src={bobcat}
            alt="bobcatlogo"
            className="w-8 h-8 rounded-full  object-center"
          />
          <Image
            src={bobcat}
            alt="bobcatlogo"
            className="w-8 h-8 rounded-full  object-center"
          />
          <Image
            src={bobcat}
            alt="bobcatlogo"
            className="w-8 h-8 rounded-full  object-center"
          />
        </div>
        <p className="uppercase py-5 text-gray-400 text-base">Dates</p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li className="text-sm">Point</li>
          <li className="text-sm">Point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
