"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white z-50 border-b border-zinc-900">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center py-5">

          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-red-500 tracking-[4px] cursor-pointer">
            ARYAN
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 font-semibold text-sm tracking-wide">

            <li>
              <Link
                href="#home"
                className="hover:text-red-500 transition duration-300"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                href="#about"
                className="hover:text-red-500 transition duration-300"
              >
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                href="#resume"
                className="hover:text-red-500 transition duration-300"
              >
                PROJECTS
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="hover:text-red-500 transition duration-300"
              >
                CONTACT
              </Link>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >

            {
              menuOpen
                ? <X size={30} className="text-red-500" />
                : <Menu size={30} className="text-white" />
            }

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >

        <ul className="flex flex-col items-center gap-8 py-8 bg-[#050505] border-t border-zinc-900 text-sm font-semibold tracking-[2px]">

          <li>
            <Link
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-500 transition"
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-500 transition"
            >
              ABOUT
            </Link>
          </li>

          <li>
            <Link
              href="#resume"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-500 transition"
            >
              PROJECTS
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-500 transition"
            >
              CONTACT
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;