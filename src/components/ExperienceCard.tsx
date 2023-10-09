import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/Data/types";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#36344328] p-6 hover:opacity-90 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-8">
      <Image
        src={experience.icon}
        alt={experience.company_name}
        className="w-20 h-20 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-top"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-1xl font-extralight">{experience.title}</h4>
        <p className="font-semibold text-1xl mt-1">{experience.company_name}</p>
        <div className="flex space-x-2 my-2">
          {/* Render technologies/icons here */}
          {experience.icons.map((icon, index) => (
            <Image
              key={`icon-${index}`}
              src={icon}
              alt={experience.company_name}
              className="w-6 h-6 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase my-3 text-gray-300">{experience.date}</p>
        <ul className="list-disc space-y-2 ml-5 mr-4 text-xs">
          {experience.points.map((point, index) => (
            <li key={`point-${index}`}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
