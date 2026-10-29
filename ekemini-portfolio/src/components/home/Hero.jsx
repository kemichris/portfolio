import { RiDownloadCloud2Line } from "react-icons/ri";
import { FaDotCircle } from "react-icons/fa";

import { Button } from "../common/Button";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="pt-30 grid grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-20">
      <div className="">
        <p className="text-text-secondary text-sm flex items-center gap-2 mb-4">
          <FaDotCircle className="text-success animate-pulse" /> Available for
          work
        </p>
        <h1 className="text-3xl md:text-5xl text-text mb-6">
          I engineer digital experiences{" "}
          <span className="text-blue-bright">
            and the systems behind them.
          </span>{" "}
        </h1>
        <p className="text-text-secondary mb-6 text-sm md:text-base">
          I'm Ekemini Christopher, a full-stack developer focused on reliable
          backend architectures, intuitive interfaces, and intelligent
          applications that solve real problems.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button text="Explore my work" to="#projects" />
          <a
            href="/resume.pdf"
            download
            className="py-2 px-4 font-semibold bg-transparent border border-line hover:scale-95 rounded text-text flex items-center gap-2 transform transition-all duration-300"
          >
            Resume
            <RiDownloadCloud2Line />
          </a>
        </div>
        <p className="text-text-secondary/50 text-xs md:text-sm mt-6">
          Frontend • Backend • System Design
        </p>
      </div>
      <HeroVisual />
    </section>
  );
}
