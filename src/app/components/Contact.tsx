"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white pt-12" // <-- Pt-24 se pt-12 kiya taaki thoda upar khisak jaye
    >
      {/* Main Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Contact Box */}
        <div className="bg-[#050505] border border-zinc-900 rounded-2xl px-6 sm:px-10 md:px-14 py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-xl shadow-black">

          {/* Left Side */}
          <div className="max-w-2xl text-center lg:text-left">
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
          </div>

          {/* Right Side Button */}
          <div className="w-full lg:w-auto flex justify-center">
            <a
              href="mailto:aryanbishnoi2134@gmail.com"
              className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 px-10 py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg shadow-red-900/30"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-16 md:mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Name */}
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-[3px] text-red-500">
              ARYAN
            </h1>
          </div>

          {/* Center: Email */}
          <div className="text-center">
            <a
              href="mailto:aryanbishnoi2134@gmail.com"
              className="text-sm md:text-base text-gray-400 hover:text-red-500 transition duration-300"
            >
              aryanbishnoi2134@gmail.com
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-6 text-2xl md:text-3xl">
            {/* Instagram */}
            <Link
              href="https://instagram.com/"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </Link>
          </div>

        </div>
      </footer>
    </section>
  );
};

export default Contact;