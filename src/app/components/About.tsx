"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// React Icons import kar rahe hain (Make sure to run: npm i react-icons)
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";

export default function About() {
  // Framer Motion ke liye simple fade-up animation variants
  const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 md:px-16 py-20 flex items-center font-sans overflow-hidden">
      <div className="w-full max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="border-l-4 border-red-600 pl-4"
        >
          <h2 className="text-xs uppercase tracking-widest text-red-500 font-semibold mb-1">Get To Know Me</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">About Me</h1>
        </motion.div>

        {/* Main Content: 2 Column Layout (Match with Hero Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text and Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6 order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold text-gray-100">
              I am a Junior Web Developer based on crafting clean digital experiences.
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              I am Aryan Bishnoi, a passionate and dedicated frontend web developer. I have always been fascinated by the ever-evolving world of technology and its limitless possibilities. My core focus is on writing maintainable code and turning complex problems into beautiful, responsive interfaces.
            </p>

            {/* Feature Cards with Hover Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#0a0a0a] p-5 rounded-md border border-red-900/20 hover:border-red-600/50 transition-all group">
                <FaCode className="text-red-500 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1">Clean Code</h4>
                <p className="text-xs text-gray-500">Writing scalable and well-structured code templates.</p>
              </div>

              <div className="bg-[#0a0a0a] p-5 rounded-md border border-red-900/20 hover:border-red-600/50 transition-all group">
                <FaLaptopCode className="text-red-500 text-2xl mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-1">Responsive Design</h4>
                <p className="text-xs text-gray-500">Ensuring perfect layouts on mobile, tablet, and desktop.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Image with Red Background Box (80% Match with Hero Section) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex justify-center md:justify-end order-1 md:order-2 w-full"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] bg-gradient-to-t from-red-950 to-red-700 overflow-hidden rounded-sm border border-red-900/30 shadow-2xl shadow-red-900/10">
              {/* Apni background-less image daalna yahan */}
              <Image
                src="/images/profile.jpg" // change to your image path
                alt="Aryan Bishnoi "
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

        </div>

        {/* Tech Stack / Skills Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="pt-8 border-t border-zinc-900"
        >
          <h3 className="text-sm font-semibold tracking-widest text-red-500 uppercase mb-6 text-center md:text-left">
            My Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-400">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded border border-zinc-800 hover:text-white transition-colors">
              <SiNextdotjs className="text-xl" /> <span>Next.js</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded border border-zinc-800 hover:text-blue-400 transition-colors">
              <SiTypescript className="text-xl" /> <span>TypeScript</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded border border-zinc-800 hover:text-cyan-400 transition-colors">
              <SiTailwindcss className="text-xl" /> <span>Tailwind CSS</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded border border-zinc-800 hover:text-yellow-400 transition-colors">
              <SiJavascript className="text-xl" /> <span>JavaScript</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}