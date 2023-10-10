"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../public/logos/white.png";
import Image from "next/image";
import { metacredly, credly, metaback } from "../../public";

type Props = {};

const badges = [
  {
    name: "Meta Front-End Certificate",
    icon: metacredly,
    link: "https://www.credly.com/org/facebook-blueprint/badge/meta-front-end-developer-certificate",
  },
  {
    name: "UX Google Certificate",
    icon: credly,
    link: "https://www.credly.com/earner/earned/badge/c2089dc9-8c95-403b-95cd-b090c6818f61",
  },
  {
    name: "Meta Back-End Certificate",
    icon: metaback,
    link: "https://www.credly.com/org/facebook-blueprint/badge/meta-back-end-developer-certificate",
  },

  // {
  //   name: "Pragmatic Institute",
  //   icon: designbadge,
  //   link: "https://www.credly.com/org/pragmatic-institute/badge/design",
  // },
  // {
  //   name: "Google U.S. Software Engineer Apprenticeship Program",
  //   icon: googlesoft,
  //   link: "https://www.credly.com/org/google-s-u-s-apprenticeship-program/badge/google-u-s-software-engineer-apprenticeship-program",
  // },
];

export default function Footer({}: Props) {
  const [active, setActive] = useState("");
  return (
    <div>
      <div className=" text-white px-12 py-6">
        <div className="container mx-auto flex justify-center">
          {/* <Link
            href="#hero"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <Image src={Logo} alt="logo" className="w-36 h-36 object-contain" />
          </Link> */}
          {/* New badges icons media here  */}
        </div>

        <p className="flex flex-col text-white items-center justify-center dark:text-[#8954fb]">
          All rights reserved 2023 &copy;
        </p>
        <p className="flex flex-col text-white items-center justify-center dark:text-[#a37ff0]">
          Suliman Badour
        </p>
        <div className=" mt-4 items-center flex justify-center">
          <ul className="sm:flex flex gap-4">
            {badges.map((item) => (
              <li
                key={item.name}
                className="h-12 w-12 cursor-pointer"
                onClick={() => {
                  setActive(item.link);
                }}
              >
                <a
                  href={item.link}
                  target={item.link}
                  rel="noopener noreferrer"
                >
                  <Image src={item.icon} alt={item.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
