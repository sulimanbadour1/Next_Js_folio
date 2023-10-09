"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { styles } from "../utils/styles";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { div } from "three/examples/jsm/nodes/Nodes.js";
type Props = {};

export default function Contact({}: Props) {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_d0pmyma",
        "template_9fuiuqg",
        {
          from: form.name,
          to_name: "Suliman",
          from_email: form.email,
          to_email: "suliman.badour1@gmail.com",
          message: form.message,
        },
        "wLxmiEP_Xiqvjl2Cj"
      )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully, I'll get back to you soon!");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Something went wrong, please try again later!");
      });
  };

  return (
    <motion.div
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="xl:mt-12 xl:flex-row  flex gap-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex=[0.75] bg-black-100 p-8 rounded-2xl dark:bg-indigo-200 dark:bg-opacity-50 "
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider dark:text-gray-800 dark:text-opacity-70">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] dark:text-gray-800">
            Contact.
          </h3>
          <form
            ref={formRef as any}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 dark:text-[#02020293]">
                {" "}
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
              border-none font-medium
              dark:bg-indigo-100 dark:placeholder:text-gray-400 dark:text-[#02020293]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 dark:text-[#02020293] ">
                {" "}
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
              border-none font-medium
              dark:bg-indigo-100 dark:placeholder:text-gray-400 dark:text-[#02020293]"
              />
            </label>
            <label className="flex flex-col ">
              <span className="text-white font-medium mb-4 dark:text-[#02020293]">
                {" "}
                Your Message
              </span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
              border-none font-small  dark:bg-indigo-100 dark:placeholder:text-gray-400 dark:text-[#02020293]"
              />
            </label>
            <button
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl
             hover:bg-[#fff] hover:text-primary"
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
