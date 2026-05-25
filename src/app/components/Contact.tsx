"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (

    <section
      id="contact"
      className="bg-black text-white pt-24"
    >

      {/* Main Wrapper */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Contact Box */}
        <div className="bg-[#050505] border border-zinc-900 rounded-2xl px-8 md:px-14 py-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl shadow-black">

          {/* Left Side */}
          <div className="max-w-2xl">

            <p className="text-red-500 uppercase tracking-[4px] text-sm font-semibold mb-4">
              Contact Me
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">

              Lets work together
              <br />
              on your next project

            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-8">

              Collaboration is key! Lets combine creativity,
              clean code, and modern design to build something
              powerful and memorable together.

            </p>

          </div>

          {/* Right Side Button */}
          <div>

            <a
              href="mailto:aryanbishnoi2134@gmail.com"
              className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-red-900/30"
            >
              Contact Me
            </a>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-900 mt-20">

        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div>

            <h1 className="text-2xl font-extrabold tracking-[3px] text-red-500">
              ARYAN
            </h1>

          </div>

          {/* Center Email */}
          <div>

            <a
              href="mailto:aryanbishnoi2134@gmail.com"
              className="text-gray-400 hover:text-red-500 transition duration-300"
            >
              aryanbishnoi2134@gmail.com
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-3xl">

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