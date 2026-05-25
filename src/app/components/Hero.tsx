import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 lg:px-16 pt-28 pb-12 flex items-center justify-center"
    >
      {/* Main Container with max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LEFT SIDE: Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1 w-full">
          <p className="text-red-500 text-base sm:text-lg md:text-xl font-medium tracking-[3px] mb-3 md:mb-4">
            Hello, My Name Is
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight tracking-tight">
            Aryan
            <br />
            Bishnoi
          </h1>

          <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mt-4 md:mt-6 mx-auto lg:mx-0">
            A passionate and dedicated junior web developer, focused on building
            modern, responsive, and user-friendly web experiences using Next.js,
            React, and Tailwind CSS.
          </p>

          {/* Buttons: Stacked on mobile, side-by-side on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-8 md:mt-10 w-full sm:w-auto">
            <a
    href="tel:+919119107429" // <-- Bas yahan +91 ke sath apna asli number likh do
    className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-red-900/30"
  >
    Contact Me
  </a>

            <a
              href="#resume"
              className="w-full sm:w-auto text-center border border-zinc-700 hover:border-red-500 hover:text-red-500 px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full mb-6 lg:mb-0">
          <div className="relative w-[240px] h-[280px] sm:w-[320px] sm:h-[380px] md:w-[380px] md:h-[450px] lg:w-[440px] lg:h-[520px] xl:w-[480px] xl:h-[560px] overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-b from-red-700 to-red-950 shadow-2xl shadow-red-950/20">
            <Image
              src="/images/profile.jpg"
              alt="Aryan Bishnoi"
              fill
              priority
              sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
              className="object-cover object-top grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}