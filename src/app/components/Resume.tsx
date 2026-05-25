"use client";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    image: "/project1.jpg",
    desc: "Modern weather application built using React and API integration.",
  },
  {
    title: "Portfolio Website",
    image: "/project2.jpg",
    desc: "Personal portfolio website built using Next.js and Tailwind CSS.",
  },
  {
    title: "Business Website",
    image: "/project3.jpg",
    desc: "Responsive business website with clean and modern UI.",
  },
  {
    title: "E-Commerce UI",
    image: "/project4.jpg",
    desc: "Stylish ecommerce frontend design with responsive layout.",
  },
  {
    title: "Admin Dashboard",
    image: "/project5.jpg",
    desc: "Secure admin panel with authentication and modern dashboard UI.",
  },
  {
    title: "Restaurant Website",
    image: "/project6.jpg",
    desc: "Elegant restaurant website with beautiful modern sections.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const MyWork = () => {
  return (
<section className="bg-black text-white pt-10 pb-24 px-8 overflow-hidden">      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-red-500 font-semibold mb-3 tracking-wider uppercase">
            ▸ My Projects
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            What I Built
          </h1>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardAnimation}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500/40 transition-all duration-500 shadow-lg hover:shadow-red-500/10"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {project.title}
                </h2>

                <p className="text-zinc-400 mb-5 leading-7">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href="https://your-project-link.vercel.app"
                    target="_blank"
                    className="bg-red-500 hover:bg-red-600 hover:scale-105 px-5 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    className="border border-zinc-700 px-5 py-2 rounded-lg hover:bg-zinc-800 hover:border-red-500 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MyWork;