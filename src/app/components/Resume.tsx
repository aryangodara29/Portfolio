import { FaGithub } from "react-icons/fa";

const MyWork = () => {
  return (

    <div className="bg-black text-white py-24 px-8">

      <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <div className="mb-16">

        <p className="text-red-500 font-semibold mb-3">
          ▸ My Projects
        </p>

        <h1 className="text-5xl font-bold">
          What I Built
        </h1>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
          <img
            src="/project1.jpg"
            alt="Project"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              Weather App
            </h2>

            <p className="text-zinc-400 mb-5 leading-7">
              Modern weather application built using React and API integration.
            </p>

            <div className="flex gap-4">

              <a
                href="https://your-project-link.vercel.app"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="border border-zinc-700 px-5 py-2 rounded-lg hover:bg-zinc-800 transition flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
          <img
            src="/project2.jpg"
            alt="Project"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h2>

            <p className="text-zinc-400 mb-5 leading-7">
              Personal portfolio website built using Next.js and Tailwind CSS.
            </p>

            <div className="flex gap-4">

              <a
                href="https://your-project-link.vercel.app"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="border border-zinc-700 px-5 py-2 rounded-lg hover:bg-zinc-800 transition flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
          <img
            src="/project3.jpg"
            alt="Project"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              Business Website
            </h2>

            <p className="text-zinc-400 mb-5 leading-7">
              Responsive business website with clean and modern UI.
            </p>

            <div className="flex gap-4">

              <a
                href="https://your-project-link.vercel.app"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="border border-zinc-700 px-5 py-2 rounded-lg hover:bg-zinc-800 transition flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
          <img
            src="/project4.jpg"
            alt="Project"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              E-Commerce UI
            </h2>

            <p className="text-zinc-400 mb-5 leading-7">
              Stylish ecommerce frontend design with responsive layout.
            </p>

            <div className="flex gap-4">

              <a
                href="https://your-project-link.vercel.app"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="border border-zinc-700 px-5 py-2 rounded-lg hover:bg-zinc-800 transition flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
          <img
            src="/project5.jpg"
            alt="Project"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              Admin Dashboard
            </h2>

            <p className="text-zinc-400 mb-5 leading-7">
              Secure admin panel with authentication and modern dashboard UI.
            </p>

            <div className="flex gap-4">

              <a
                href="https://your-project-link.vercel.app"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="border border-zinc-700 px-5 py-2 rounded-lg hover:bg-zinc-800 transition flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
          <img
            src="/project6.jpg"
            alt="Project"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">
              Restaurant Website
            </h2>

            <p className="text-zinc-400 mb-5 leading-7">
              Elegant restaurant website with beautiful modern sections.
            </p>

            <div className="flex gap-4">

              <a
                href="https://your-project-link.vercel.app"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="border border-zinc-700 px-5 py-2 rounded-lg hover:bg-zinc-800 transition flex items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </div>
        </div>

      </div>

      </div>

    </div>
  );
};

export default MyWork;