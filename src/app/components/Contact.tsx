"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white pt-4 overflow-hidden relative"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Main Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Contact Box */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#050505]/80 backdrop-blur-md border border-zinc-900 rounded-3xl px-6 sm:px-10 md:px-14 py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl shadow-red-950/10 hover:border-red-500/20 transition-all duration-500"
        >

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center lg:text-left"
          >
            <p className="text-red-500 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              Contact Me
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
              Let's work together
              <br />
              on your next project
            </h1>

            <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Collaboration is key! Let's combine creativity, clean code, and
              modern design to build something powerful and memorable together.
            </p>
          </motion.div>

          {/* Right Side Button */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto flex justify-center"
          >
            <a
              href="mailto:aryanbishnoi2134@gmail.com"
              className="relative overflow-hidden group w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg shadow-red-900/30 transition-all duration-500 hover:scale-110"
            >

              <span className="relative z-10">
                Contact Me
              </span>

              {/* Shine Effect */}
              <div className="absolute top-0 left-[-100%] w-full h-full bg-white/10 skew-x-12 group-hover:left-[120%] transition-all duration-1000"></div>

            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-16 md:mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h1 className="text-xl md:text-2xl font-extrabold tracking-[3px] text-red-500 hover:text-red-400 transition duration-300">
              ARYAN
            </h1>
          </motion.div>

          {/* Center: Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="mailto:aryanbishnoi2134@gmail.com"
              className="text-sm md:text-base text-gray-400 hover:text-red-500 transition duration-300"
            >
              aryanbishnoi2134@gmail.com
            </a>
          </motion.div>

          {/* Right: Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 text-2xl md:text-3xl"
          >

            {/* Instagram */}
            <Link
              href="https://instagram.com/"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FaInstagram />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FaLinkedin />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/"
              target="_blank"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <FaGithub />
            </Link>

          </motion.div>

        </div>
      </footer>
    </section>
  );
};

export default Contact;