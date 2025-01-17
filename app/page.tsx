import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
