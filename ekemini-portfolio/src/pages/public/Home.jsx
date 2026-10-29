import { Reveal } from "../../components/common/Reveal";
import { Hero } from "../../components/home/Hero";
import { Marqueue } from "../../components/home/Marqueue";
import { About } from "../../components/home/About";

export function Home() {
  return (
    <>
      <Reveal delay={0.15}>
        <Hero />
      </Reveal>

      <Reveal delay={0.15}>
        <Marqueue />
      </Reveal>
      
      <Reveal delay={0.2}>
        <About />
      </Reveal>
    </>
  );
}
