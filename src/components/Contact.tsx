"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import { styles } from "../utils/styles";
import { motion } from "framer-motion";
type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
type Props = {};
export default function Contact({}: Props) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // Next Js Server Side Form
    setLoading(true);

    emailjs
      .send(
        "service_d0pmyma",
        "template_9fuiuqg",
        {
          from: formData.name,
          to_name: "Suliman",
          from_email: formData.email,
          to_email: "suliman.badour1@gmail.com",
          message: formData.message,
          subject: formData.subject,
        },
        "wLxmiEP_Xiqvjl2Cj"
      )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully, I'll get back to you soon!");
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong, please try again later!");
      });
    document.querySelector("form")?.reset();
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center
    md:text-left md:flex-row px-10 justify-evenly mx-auto items-center"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <h3 className="absolute top-32 uppercase tracking-[8px] text-gray-200 text-3xl md:pb-12">
        Get in touch.
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">Contact.</h4>

        {/* Form starts here */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 5,
                  message: "Name must be at least 5 characters long",
                },
              })}
            />
            {/* {toast.error("Name is required")} */}
            <input
              className="contactInput"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {/* {errors.email && (
              <p className="error-popup">{errors.email.message}</p>
            )} */}
          </div>
          <input
            className="contactInput"
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true, minLength: 5 })}
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message", {
              required: true,
              minLength: 5,
            })}
          />
          <button
            type="submit"
            className="bg-[#fff] py-5 px-6 rounded-md text-black
        text-lg font-bold hover:bg-[#9b89ecda] hover:text-[#fff] transition-all
        duration-300 ease-in-out"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
