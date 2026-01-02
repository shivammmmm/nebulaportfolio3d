"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 z-[20]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Contact Me
      </motion.div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 p-8 rounded-2xl border border-[#7042f861] bg-[#0300145e] backdrop-blur-md w-full max-w-[600px]"
        >
          <p className="text-gray-300 text-lg italic cursive">
            "Have a project in mind? Let&apos;s build something amazing together."
          </p>
          
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#0b0722] border border-[#2a0e61] text-gray-200 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#0b0722] border border-[#2a0e61] text-gray-200 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="bg-[#0b0722] border border-[#2a0e61] text-gray-200 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition"
            ></textarea>
            
            <button className="py-3 button-primary text-center text-white cursor-pointer rounded-lg font-bold hover:scale-105 transition-transform">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};