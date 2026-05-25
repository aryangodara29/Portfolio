"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 lg:px-16 pt-28 pb-12 flex items-center justify-center overflow-hidden"
    >

      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-red-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-500/10 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-center lg:text-left order-2 lg:order-1 w-full"
        >

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-red-500 text-base sm:text-lg md:text-xl font-medium tracking-[3px] mb-3 md:mb-4"
          >
            Hello, My Name Is
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight tracking-tight"
          >
            Aryan
            <br />
            <span className="text-red-500">
              Bishnoi
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mt-4 md:mt-6 mx-auto lg:mx-0"
          >
            A passionate and dedicated junior web developer, focused on building
            modern, responsive, and user-friendly web experiences using Next.js,
            React, and Tailwind CSS.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-8 md:mt-10 w-full sm:w-auto"
          >

            {/* Contact Button */}
            <a
              href="tel:+919119107429"
              className="relative overflow-hidden group w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-110 shadow-lg shadow-red-900/40"
            >

              <span className="relative z-10">
                Contact Me
              </span>

              {/* Shine Effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-white/10 skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

            </a>

            {/* Projects Button */}
            <a
              href="#resume"
              className="w-full sm:w-auto text-center border border-zinc-700 hover:border-red-500 hover:text-red-500 hover:bg-red-500/5 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>

          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full mb-6 lg:mb-0"
        >

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >

            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-red-600/20 blur-[70px] rounded-full scale-90"></div>

            {/* Image Container */}
            <div className="relative w-[240px] h-[280px] sm:w-[320px] sm:h-[380px] md:w-[380px] md:h-[450px] lg:w-[440px] lg:h-[520px] xl:w-[480px] xl:h-[560px] overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-b from-red-700 to-red-950 shadow-2xl shadow-red-950/30">

              <Image
                src="/images/profile.jpg"
                alt="Aryan Bishnoi"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                className="object-cover object-top grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}