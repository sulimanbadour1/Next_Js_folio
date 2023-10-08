"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import Logo from "../../public/logos/black.png";
import menu from "../../public/assets/menu.svg";
import close from "../../public/assets/close.svg";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`
        sm:px-16 px-6
       w-full flex items-start justify-between  p-6 fixed top-0 z-20 ${
         scrolled ? "bg-primary" : "bg-transparent"
       }`}
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, type: "spring", stiffness: 100 }}
        className="w-full flex justify-between items-center max-w-7xl mx-auto"
      >
        {/* LOGO */}
        <Link
          href="/"
          className="cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex flex-row items-center">
            <Image src={Logo} alt="Suliman Logo" width={100} height={100} />
          </div>
        </Link>

        {/* Social Icons */}
        <div className="flex flex-row items-center">
          <SocialIcon
            url="https://github.com/sulimanbadour1"
            bgColor="transparent"
            fgColor="black"
            network="github"
          />
          <SocialIcon
            className="cursor-pointer"
            bgColor="transparent"
            fgColor="black"
            network="email"
            url="mailto:suliman.badour1@gmail.com"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/sulimanbadour/"
            bgColor="transparent"
            fgColor="black"
            network="linkedin"
          />
        </div>
        {/* Navigation */}
        <div>
          <nav className="flex flex-row items-center p-3 ">
            <ul className="list-none hidden sm:flex sm:flex-row flex-row gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-gray-500" : "text-gray-500"
                  } hover:text-gray-800 text-[14px] font-bold cursor-pointer `}
                  onClick={() => {
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <Image
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] cursor-pointer object-contain"
                onClick={() => setToggle(!toggle)}
              />
              <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, type: "spring", stiffness: 100 }}
                className={`${
                  !toggle ? "hidden" : "flex"
                }  p-9 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
              >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title
                          ? "text-gray-900"
                          : "text-gray-900"
                      }  hover:text-gray-400 font-bold cursor-pointer text-[16px]`}
                      onClick={() => {
                        setActive(link.title);
                        setToggle(!toggle);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
