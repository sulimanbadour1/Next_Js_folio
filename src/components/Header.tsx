"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import Logo from "../../public/logos/white.png";
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
      id: "experience",
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
    <header className="z-[999] relative">
      <nav
        className={`
        fixed
        sm:px-16 px-6
        w-full flex items-center py-4 top-0 z-50 bg-[#151030] 
         shadow-black/[0.05]
        `}
      >
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, type: "spring", stiffness: 100 }}
          className="w-full flex justify-between items-center max-w-7xl mx-auto"
        >
          {/* Social Icons */}
          <div className=" hidden md:flex flex-row items-center">
            <SocialIcon
              url="https://github.com/sulimanbadour1"
              bgColor="transparent"
              fgColor="white"
              network="github"
            />
            <SocialIcon
              className="cursor-pointer"
              bgColor="transparent"
              fgColor="white"
              network="email"
              url="mailto:suliman.badour1@gmail.com"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/sulimanbadour/"
              bgColor="transparent"
              fgColor="white"
              network="linkedin"
            />
            <SocialIcon
              url="https://dribbble.com/SulimanBadour/"
              bgColor="transparent"
              fgColor="white"
              network="dribbble"
            />
            <SocialIcon
              url="https://www.behance.net/sulimanbadour"
              bgColor="transparent"
              fgColor="white"
              network="behance"
            />
          </div>
          {/* LOGO */}
          <Link
            href="#hero"
            className="cursor-pointer"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="flex flex-row items-center">
              <Image
                src={Logo}
                alt="Suliman Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
          </Link>
          {/* Navigation */}
          <div>
            <nav className="flex flex-row items-center p-2 ">
              <ul className="list-none hidden sm:flex sm:flex-row flex-row gap-10">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                        ? "text-[#60449e]"
                        : "text-[#aaa6c3]"
                    } hover:text-white text-[16px] font-bold cursor-pointer `}
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
                  }  px-6 py-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 absolute top-20 right-0 mx-10 my-8 min-w[140px] z-10 rounded-xl`}
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
      </nav>
    </header>
  );
}

export default Header;
