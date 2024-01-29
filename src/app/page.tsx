import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import TechList from "./sections/TechList/TechList";
import Projects from "./sections/Projects/Projects";

export default function Home() {
  return (
    <main>

      <section>
        <Hero />
      </section>

      <section>
        <TechList />
      </section>

      <section className="">
        <Projects />
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <About />
      </section>

    </main>
  );
}
