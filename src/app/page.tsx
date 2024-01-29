import About from "./sections/About/About";
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
        <About />
      </section>

    </main>
  );
}
