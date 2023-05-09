import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Intro() {
  return (
    <div className="text-start pt-20 pb-20 border-b border-stone-300 dark:border-stone-600">
      <p className="text-3xl max-w-xl font-[350] leading-snug tracking-[.015em] mb-6">
        Hey there, I&apos;m{" "}
        <span className="font-[560] text-black dark:text-white">Ernest Ho</span>{" "}
        — a Web Developer with a passion for all things Design. Recently
        graduated from a Web Development Bootcamp at{" "}
        <a
          className="underline underline-offset-[0.2rem] decoration-2"
          href="https://www.lewagon.com/singapore"
          target="_blank"
          rel="noreferrer"
        >
          Le Wagon Singapore
        </a>{" "}
        🇸🇬 and currently diving into the world of React!
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-3 md:gap-4 items-center">
          <div className="available w-3 h-3 rounded-full bg-green-500"></div>
          <span className="font-mono text-xs md:text-sm">Open to Work</span>
        </div>
        <div className="flex gap-2.5 md:gap-3 text-lg md:text-2xl items-center text-neutral-500 dark:text-neutral-200">
          <span className="font-mono text-xs md:text-sm">
            Let&apos;s Connect!
          </span>

          <a
            data-tooltip-target="tooltip-github"
            type="button"
            className="hover:text-neutral-600 dark:hover:text-white transition-colors duration-300"
            href="https://github.com/ernest-heh"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <div
            id="tooltip-github"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-1.5 py-1 text-xs font-medium text-white bg-neutral-600 rounded-md shadow-sm opacity-0 tooltip dark:bg-neutral-200 dark:text-neutral-800 transition-opacity duration-300"
          >
            GitHub
          </div>

          <a
            data-tooltip-target="tooltip-linkedin"
            type="button"
            className="hover:text-neutral-600 dark:hover:text-white transition-colors duration-300"
            href="https://www.linkedin.com/in/ernest-heh"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <div
            id="tooltip-linkedin"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-1.5 py-1 text-xs font-medium text-white bg-neutral-600 rounded-md shadow-sm opacity-0 tooltip dark:bg-neutral-200 dark:text-neutral-800 transition-opacity duration-300"
          >
            LinkedIn
          </div>

          <a
            data-tooltip-target="tooltip-email"
            type="button"
            className="hover:text-neutral-600 dark:hover:text-white transition-colors duration-300"
            href="mailto:ernest.heh@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdMail />
          </a>
          <div
            id="tooltip-email"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-1.5 py-1 text-xs font-medium text-white bg-neutral-600 rounded-md shadow-sm opacity-0 tooltip dark:bg-neutral-200 dark:text-neutral-800 transition-opacity duration-300"
          >
            Email
          </div>
        </div>
      </div>
    </div>
  );
}
