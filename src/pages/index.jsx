import Hero from "@/components/hero-section";
import About from "@/components/about";
import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Work from "@/components/work";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
