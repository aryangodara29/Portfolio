import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Resume from "@/app/components/Resume";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main>

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      {/* Resume / Projects */}
      <section id="resume">
        <Resume />
      </section>

      <section id="contact">
  <Contact />
</section>

    </main>
  );
}