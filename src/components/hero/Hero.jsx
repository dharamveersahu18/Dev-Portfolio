import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import profile from "../../assets/images/Profile.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react"; // Change to "framer-motion" if needed

const ROTATING_WORDS = [
  "AI Experiences",
  "Web Applications",
  "Scalable Backends",
  "Real-Time Systems",
];

function WordFlipper() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block relative overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[index]}
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -35, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-green-600 dark:text-lime-400 font-black"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[#f4f7f0] text-[#172019]
        transition-colors duration-500
        dark:bg-[#0b0d10] dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2 -z-0
          h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2
          rounded-full bg-lime-400/10 blur-[120px]
        "
      />

      {/* =====================================================
          DESKTOP TOP-RIGHT ACTION BUTTONS (RESUME, GITHUB, LINKEDIN)
      ====================================================== */}
      <div className="hidden lg:flex absolute top-8 right-10 xl:right-16 z-40 items-center gap-3">
        {/* RESUME */}
        <a
          href="Resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="View Resume"
          className="
            group flex h-11 items-center gap-2 rounded-full
            border border-gray-300 bg-white/70 px-5 text-sm font-medium text-gray-700
            backdrop-blur-md transition-all duration-300
            hover:-translate-y-1 hover:border-lime-500 hover:text-green-600 hover:shadow-lg
            dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300
            dark:hover:border-lime-400/40 dark:hover:bg-lime-400/[0.06] dark:hover:text-lime-300
          "
        >
          <FaFileLines
            size={15}
            className="text-gray-500 transition-colors group-hover:text-green-600 dark:group-hover:text-lime-400"
          />
          <span>Resume</span>
          <FaExternalLinkAlt
            size={11}
            className="
              text-gray-400 transition-all duration-300
              group-hover:translate-x-0.5 group-hover:-translate-y-0.5
              group-hover:text-green-600 dark:group-hover:text-lime-400
            "
          />
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/dharamveersahu18"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="
            flex h-11 w-11 items-center justify-center rounded-full
            border border-gray-300 bg-white/70 text-gray-600 backdrop-blur-md
            transition-all duration-300 hover:-translate-y-1 hover:border-lime-500 hover:text-green-600 hover:shadow-lg
            dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-400
            dark:hover:border-lime-400/40 dark:hover:bg-lime-400/[0.06] dark:hover:text-lime-300
          "
        >
          <FaGithub size={19} />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/dharamveer-sahu/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="
            flex h-11 w-11 items-center justify-center rounded-full
            border border-gray-300 bg-white/70 text-gray-600 backdrop-blur-md
            transition-all duration-300 hover:-translate-y-1 hover:border-lime-500 hover:text-green-600 hover:shadow-lg
            dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-400
            dark:hover:border-lime-400/40 dark:hover:bg-lime-400/[0.06] dark:hover:text-lime-300
          "
        >
          <FaLinkedin size={19} />
        </a>
      </div>

      {/* =====================================================
          MOBILE HERO
      ====================================================== */}
      <div className="relative z-10 px-5 pb-20 pt-28 lg:hidden">
        <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-xl flex-col items-center text-center">
          {/* STATUS */}
          <div
            className="
              mb-8 inline-flex items-center gap-2 rounded-full
              border border-lime-500/30 bg-lime-500/5 px-4 py-2
              text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-lime-400
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Open to Internships & Projects
          </div>

          {/* PROFILE */}
          <div className="relative mb-9">
            <div className="absolute inset-[-25px] rounded-full bg-lime-400/10 blur-3xl" />
            <div className="absolute inset-[-12px] rounded-full border border-lime-400/30" />
            <div
              className="
                relative h-[230px] w-[230px] overflow-hidden rounded-full
                border-2 border-lime-400 bg-gradient-to-br from-lime-300 to-green-500
                shadow-[0_0_60px_rgba(163,230,53,0.15)] sm:h-[270px] sm:w-[270px]
              "
            >
              <img
                src={profile}
                alt="Dharamveer Sahu"
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>

            {/* PROJECT COUNT */}
            <div
              className="
                absolute -bottom-4 -left-4 rounded-2xl border border-gray-200
                bg-white/80 px-4 py-3 text-left shadow-xl backdrop-blur-md
                dark:border-white/10 dark:bg-[#181a1f]/90
              "
            >
              <p className="text-lg font-black">10+</p>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Projects
              </p>
            </div>

            {/* CURRENTLY */}
            <div
              className="
                absolute -right-5 top-4 rounded-2xl border border-gray-200
                bg-white/80 px-4 py-3 text-left shadow-xl backdrop-blur-md
                dark:border-white/10 dark:bg-[#181a1f]/90
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Currently exploring
              </p>
              <p className="mt-1 text-xs font-bold">WebSockets · RAG</p>
            </div>
          </div>

          {/* NAME */}
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-green-600 dark:text-lime-400">
            DHARAMVEER SAHU
          </p>

          {/* ROLE */}
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl">
            Full-Stack <br />
            <span className="text-green-600 dark:text-lime-400">Developer</span>
          </h1>

          {/* HEADLINE */}
          <h2 className="mt-7 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
            Building <WordFlipper />
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400">
            I build modern full-stack web applications with React, Node.js and
            MongoDB, while exploring real-time systems and AI-powered applications.
          </p>

          {/* TECH STACK */}
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {["React", "Node.js", "MongoDB", "WebSocket", "AI / RAG"].map(
              (skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full border border-gray-300 bg-white/40 px-3 py-1.5
                    text-xs font-semibold transition hover:-translate-y-0.5 hover:border-lime-400
                    dark:border-white/10 dark:bg-white/5
                  "
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* LOCATION */}
          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
            <MapPin size={14} />
            India · BSc Computer Science
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/projects"
              className="
                group flex items-center gap-2 rounded-full
                bg-gradient-to-r from-lime-400 to-green-500 px-6 py-3
                font-bold text-black shadow-lg shadow-lime-500/10 transition
                duration-300 hover:-translate-y-1 hover:shadow-xl
              "
            >
              Explore Projects
              <ArrowUpRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/contact"
              className="
                group flex items-center gap-2 rounded-full border border-gray-300
                px-6 py-3 font-bold text-gray-700 transition duration-300
                hover:-translate-y-1 hover:border-green-500 hover:text-green-600
                dark:border-white/10 dark:text-gray-300 dark:hover:border-lime-400 dark:hover:text-lime-400
              "
            >
              Let's Connect
              <Mail size={17} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          {/* MOBILE SOCIAL LINKS */}
          <div className="flex lg:hidden mt-6 items-center gap-3">
            <a
              href="Resume.pdf"
              download
              aria-label="Download Resume"
              className="
                flex h-10 items-center gap-2 rounded-full border border-white/10
                bg-white/[0.03] px-4 text-sm font-medium text-gray-300 backdrop-blur-md
                transition-all duration-300 hover:border-lime-400/40 hover:bg-lime-400/[0.06] hover:text-lime-300
              "
            >
              <FaFileLines size={14} />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/dharamveersahu18"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                flex h-10 w-10 items-center justify-center rounded-full border border-white/10
                bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-lime-400/40 hover:text-lime-300
              "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/dharamveer-sahu/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                flex h-10 w-10 items-center justify-center rounded-full border border-white/10
                bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-lime-400/40 hover:text-lime-300
              "
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* SCROLL */}
          <div className="mt-12 flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
            <span>Scroll to explore</span>
            <span className="animate-bounce text-lime-400">↓</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP HERO
      ====================================================== */}
      <div className="relative z-10 hidden px-6 pt-28 pb-16 lg:block">
        <div className="mx-auto flex min-h-[82vh] max-w-7xl items-center">
          <div className="grid w-full grid-cols-2 items-center gap-12 xl:gap-20">

            {/* LEFT CONTENT */}
            <div className="relative z-10">
              {/* STATUS */}
              <div
                className="
                  mb-6 inline-flex items-center gap-3 rounded-full
                  border border-lime-400/30 bg-lime-400/5 px-4 py-2
                  text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-lime-400
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
                </span>
                Open to Internships & Projects
              </div>

              {/* NAME */}
              <h1 className="text-7xl font-black uppercase leading-[0.86] tracking-[-0.06em] xl:text-8xl">
                Dharamveer <br />
                <span className="text-green-600 dark:text-lime-400">Sahu</span>
              </h1>

              {/* ROLE & WORD FLIPPER */}
              <div className="mt-7">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600 dark:text-lime-400">
                  Full-Stack Developer
                </p>
                <h2 className="mt-3 max-w-2xl text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
                  Building <br />
                  <WordFlipper />
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                I build modern full-stack web applications with React, Node.js and
                MongoDB, while exploring real-time systems and AI-powered applications.
              </p>

              {/* TECH CHIPS */}
              <div className="mt-7 flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "WebSocket", "AI / RAG"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full border border-gray-300 bg-white/30 px-4 py-2
                        text-xs font-semibold transition duration-300
                        hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-400/5
                        dark:border-white/10 dark:bg-white/[0.03]
                      "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              {/* LOCATION & DEGREE */}
              <div className="mt-6 flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <MapPin size={15} />
                  India
                </span>
                <span>•</span>
                <span>BSc Computer Science</span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="
                    group flex items-center gap-2 rounded-full
                    bg-gradient-to-r from-lime-400 to-green-500 px-7 py-3.5
                    font-bold text-black shadow-lg shadow-lime-500/10
                    transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl
                  "
                >
                  Explore Projects
                  <ArrowUpRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="
                    group flex items-center gap-2 rounded-full border border-gray-300
                    px-7 py-3.5 font-bold text-gray-700 transition duration-300
                    hover:-translate-y-1 hover:border-green-500 hover:text-green-600
                    dark:border-white/10 dark:text-gray-300 dark:hover:border-lime-400 dark:hover:text-lime-400
                  "
                >
                  Let's Connect
                  <Mail
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT PROFILE */}
            <div className="relative flex min-h-[580px] items-center justify-center">
              {/* LARGE GLOW */}
              <div className="absolute h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[100px]" />

              {/* MAIN CIRCLE */}
              <div className="absolute h-[430px] w-[430px] rounded-full bg-gradient-to-br from-lime-400/80 to-green-500/80 opacity-80" />

              {/* OUTER RINGS */}
              <div className="absolute h-[470px] w-[470px] rounded-full border border-lime-400/30" />
              <div className="absolute h-[500px] w-[500px] rounded-full border border-lime-400/10" />

              {/* PROFILE IMAGE */}
              <div
                className="
                  relative z-10 h-[530px] w-[420px] overflow-hidden
                  rounded-[45%] border border-white/10 shadow-2xl
                "
              >
                <img
                  src={profile}
                  alt="Dharamveer Sahu"
                  className="h-full w-full object-cover object-[center_20%] transition duration-700 hover:scale-105"
                />
              </div>

              {/* FLOATING CARD: PROJECTS BUILT */}
              <div
                className="
                  absolute bottom-8 left-0 z-20 rounded-2xl border border-gray-200
                  bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl transition duration-300
                  hover:-translate-y-2 dark:border-white/10 dark:bg-[#181a1f]/90
                "
              >
                <p className="text-2xl font-black">10+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Projects Built
                </p>
                <div className="mt-2 text-[10px] text-gray-500 dark:text-gray-400">
                  Web · Backend · AI
                </div>
              </div>

              {/* FLOATING CARD: CURRENTLY EXPLORING */}
              <div
                className="
                  absolute right-0 top-10 z-20 max-w-[190px] rounded-2xl
                  border border-gray-200 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl
                  transition duration-300 hover:-translate-y-2 dark:border-white/10 dark:bg-[#181a1f]/90
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Currently
                  </p>
                </div>
                <p className="mt-2 text-sm font-bold">Exploring</p>
                <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  WebSockets · Docker · RAG
                </p>
              </div>

              {/* FLOATING CARD: NEXT DIRECTION */}
              <div
                className="
                  absolute bottom-24 right-2 z-20 hidden rounded-xl
                  border border-lime-400/20 bg-[#0b0d10]/80 px-4 py-3
                  shadow-xl backdrop-blur-xl xl:block
                "
              >
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  Next Direction
                </p>
                <p className="mt-1 text-xs font-bold text-lime-400">
                  AI + Full Stack
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div
          className="
            absolute bottom-6 left-1/2 hidden -translate-x-1/2
            flex-col items-center gap-2 text-[10px] font-semibold
            uppercase tracking-[0.3em] text-gray-400 lg:flex
          "
        >
          <span>Scroll to explore</span>
          <span className="animate-bounce text-lime-400">↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;