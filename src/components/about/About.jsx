
import education from "../data/education";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

import { useState } from "react";
import {
  GraduationCap,
  Code2,
  User,
  Calendar,
  BookOpen,
  Download,
  ArrowUpRight,
  Briefcase,
  Sparkles,
  CheckCircle2,
} from "lucide-react";


function About() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-[#f4f7f0]
        px-4 py-20
        text-[#172019]
        transition-colors duration-500

        sm:px-6

        dark:bg-[#0b0d10]
        dark:text-slate-200
      "
    >
      {/* ================= HEADING ================= */}

      <div className="mx-auto max-w-6xl text-center">

        <h2
          className="
            text-3xl font-bold tracking-wide
            text-green-600
            sm:text-4xl

            dark:text-lime-400
          "
        >
          Personal Overview
        </h2>

        <p
          className="
            mt-4 text-sm
            text-gray-600
            sm:text-base

            dark:text-slate-400
          "
        >
          Discover my journey, skills, and passion for creating
          digital solutions.
        </p>

      </div>

      {/* ================= TABS ================= */}

      <div
        className="
          mx-auto mt-10
          flex max-w-2xl
          rounded-2xl
          border
          border-gray-200
          bg-white/70
          p-2
          shadow-sm
          backdrop-blur-md

          dark:border-slate-800
          dark:bg-[#11151b]
          dark:shadow-none
        "
      >

        <TabButton
          active={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
          icon={<User size={18} />}
        >
          Profile
        </TabButton>
        <TabButton
          active={activeTab === "education"}
          onClick={() => setActiveTab("education")}
          icon={<GraduationCap size={18} />}
        >
          Education
        </TabButton>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="mx-auto mt-12 max-w-6xl">

        {activeTab === "education" && <Education />}

        {activeTab === "skills" && <Skills />}

        {activeTab === "profile" && <Profile />}

      </div>
    </section>
  );
}

/* ================= TAB BUTTON ================= */

function TabButton({ active, onClick, icon, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-300 ${
        active
          ? `
            bg-gradient-to-r
            from-lime-400
            to-green-500
            text-slate-950
            shadow-[0_0_20px_rgba(163,230,53,0.25)]
          `
          : `
            text-gray-500
            hover:bg-gray-100
            hover:text-gray-900

            dark:text-slate-400
            dark:hover:bg-slate-800
            dark:hover:text-white
          `
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

/* ================= EDUCATION ================= */

function Education() {
  return (
    <div>

      {/* Heading */}
      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-full
              border
              border-green-500/30
              bg-green-500/10
              text-green-600

              dark:border-lime-400/30
              dark:bg-lime-400/10
              dark:text-lime-400
            "
          >
            <GraduationCap size={25} />
          </div>

          <h3
            className="
              text-3xl font-bold
              text-green-600

              dark:text-lime-400
            "
          >
            Education
          </h3>

        </div>

        <p
          className="
            mt-5 max-w-4xl
            text-sm leading-7
            text-gray-600
            sm:text-base

            dark:text-slate-400
          "
        >
          My academic journey has helped me build a strong foundation
          in computer science while continuously improving my technical
          and problem-solving skills.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative space-y-5 pl-7">

        {/* Timeline line */}
        <div
          className="
            absolute
            bottom-5 left-[7px] top-5
            w-px
            bg-green-500/40

            dark:bg-lime-400/50
          "
        />

        {education.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="relative">

              {/* Timeline dot */}
              <div
                className="
                  absolute
                  -left-[26px]
                  top-6
                  h-4 w-4
                  rounded-full
                  border-2
                  border-green-300
                  bg-green-500
                  shadow-[0_0_12px_rgba(34,197,94,0.5)]

                  dark:border-lime-300
                  dark:bg-lime-400
                  dark:shadow-[0_0_12px_rgba(163,230,53,0.7)]
                "
              />

              {/* Card */}
              <div
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white/70
                  p-5
                  shadow-sm
                  backdrop-blur-md
                  transition-all duration-300

                  hover:-translate-y-1
                  hover:border-green-400/50
                  hover:shadow-[0_10px_35px_rgba(34,197,94,0.08)]

                  sm:p-6

                  dark:border-slate-800
                  dark:bg-[#11151b]
                  dark:shadow-none
                  dark:hover:border-lime-400/40
                  dark:hover:shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                "
              >

                <div
                  className="
                    flex flex-col gap-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className="
                        hidden
                        h-12 w-12
                        shrink-0
                        items-center justify-center
                        rounded-full
                        bg-gray-100
                        text-green-600

                        sm:flex

                        dark:bg-slate-800
                        dark:text-lime-400
                      "
                    >
                      <Icon size={23} />
                    </div>

                    <div>

                      <h4
                        className="
                          text-base font-bold
                          text-gray-900
                          sm:text-lg

                          dark:text-white
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-1 text-sm
                          text-gray-600

                          dark:text-slate-400
                        "
                      >
                        {item.institute}
                      </p>

                      <p className="mt-2 text-sm">

                        <span
                          className="
                            font-semibold
                            text-green-600

                            dark:text-lime-400
                          "
                        >
                          Grade:
                        </span>{" "}

                        <span
                          className="
                            text-gray-700

                            dark:text-slate-300
                          "
                        >
                          {item.grade}
                        </span>

                      </p>

                    </div>

                  </div>

                  {/* Year */}

                  <div
                    className="
                      flex w-fit
                      items-center gap-2
                      rounded-lg
                      border
                      border-green-500/20
                      bg-green-500/5
                      px-3 py-2
                      text-xs font-semibold
                      text-green-600

                      dark:border-lime-400/20
                      dark:bg-lime-400/5
                      dark:text-lime-400
                    "
                  >
                    <Calendar size={14} />
                    {item.year}
                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}


/* ================= PROFILE ================= */

/* ================= PROFILE (BENTO GRID) ================= */

function Profile() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div
          className="
            flex h-12 w-12 items-center justify-center rounded-full
            border border-green-500/30 bg-green-500/10 text-green-600
            dark:border-lime-400/30 dark:bg-lime-400/10 dark:text-lime-400
          "
        >
          <User size={25} />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-green-600 dark:text-lime-400">
            About Me at a Glance
          </h3>
          <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">
            Overview, current status, and engineering background.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* CARD 1: Core Bio & Resume Download (Spans 2 cols on desktop) */}
        <div
          className="
            md:col-span-2 rounded-2xl border border-gray-200 bg-white/70 p-6 sm:p-8
            shadow-sm backdrop-blur-md transition-all duration-300
            hover:border-green-400/50 hover:shadow-lg
            dark:border-slate-800 dark:bg-[#11151b] dark:hover:border-lime-400/30
          "
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-600 dark:text-lime-400">
            <Sparkles size={16} />
            <span>Full-Stack & Frontend Engineer</span>
          </div>

          <h4 className="mt-3 text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Passionate about crafting fast, modern web applications.
          </h4>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-slate-300 sm:text-base">
            I am Dharamveer Sahu, a developer focused on modern web architectures using React, Node.js, and MongoDB. I enjoy designing clean user interfaces with Tailwind CSS and Framer Motion, exploring real-time WebSockets, and diving into AI applications.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Download Resume Button */}
            <a
              href="Resume.pdf"
              download
              className="
                group inline-flex items-center gap-2 rounded-full
                bg-gradient-to-r from-lime-400 to-green-500
                px-5 py-2.5 text-xs font-bold text-slate-950
                shadow-[0_0_20px_rgba(163,230,53,0.3)]
                transition-all duration-300 hover:scale-105
                sm:text-sm
              "
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              <span>Download CV / Resume</span>
            </a>

            <Link
              to="/contact"
              className="
                inline-flex items-center gap-1.5 rounded-full border border-gray-300
                bg-transparent px-4 py-2.5 text-xs font-semibold text-gray-700
                transition-colors hover:border-green-500 hover:text-green-600
                dark:border-slate-700 dark:text-slate-300 dark:hover:border-lime-400 dark:hover:text-lime-400
                sm:text-sm
              "
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* CARD 2: Work Status & Availability */}
        <div
          className="
            flex flex-col justify-between rounded-2xl border border-gray-200 bg-white/70 p-6
            shadow-sm backdrop-blur-md transition-all duration-300
            hover:border-green-400/50 hover:shadow-lg
            dark:border-slate-800 dark:bg-[#11151b] dark:hover:border-lime-400/30
          "
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500">
              Status
            </span>

            <div className="mt-4 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400" />
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                Available for Work
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-gray-600 dark:text-slate-400">
              Open to internship opportunities, freelance contracts, and software engineering roles.
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-3 dark:border-lime-400/20 dark:bg-lime-400/5">
            <p className="text-[11px] font-semibold text-green-700 dark:text-lime-400">
              📍 India · Remote or On-site
            </p>
          </div>
        </div>

        {/* CARD 3: Education Spotlight */}
        <div
          className="
            rounded-2xl border border-gray-200 bg-white/70 p-6
            shadow-sm backdrop-blur-md transition-all duration-300
            hover:border-green-400/50 hover:shadow-lg
            dark:border-slate-800 dark:bg-[#11151b] dark:hover:border-lime-400/30
          "
        >
          <div className="flex items-center gap-2 text-green-600 dark:text-lime-400">
            <GraduationCap size={18} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Education</span>
          </div>

          <h5 className="mt-3 text-base font-bold text-gray-900 dark:text-white">
            B.Sc. Computer Science
          </h5>

          <p className="mt-1 text-xs text-gray-600 dark:text-slate-400">
            Shri Shankaracharya Institute, Raipur
          </p>

          <span className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-700 dark:bg-slate-800 dark:text-slate-300">
            2025 - Present · Active Degree
          </span>
        </div>

        {/* CARD 4: Currently Exploring */}
        <div
          className="
            rounded-2xl border border-gray-200 bg-white/70 p-6
            shadow-sm backdrop-blur-md transition-all duration-300
            hover:border-green-400/50 hover:shadow-lg
            dark:border-slate-800 dark:bg-[#11151b] dark:hover:border-lime-400/30
          "
        >
          <div className="flex items-center gap-2 text-green-600 dark:text-lime-400">
            <Briefcase size={18} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Currently Exploring</span>
          </div>

          <h5 className="mt-3 text-base font-bold text-gray-900 dark:text-white">
            Next-Gen Technologies
          </h5>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {["WebSockets", "Docker", "AI & RAG", "System Design"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CARD 5: Development Philosophy */}
        <div
          className="
            rounded-2xl border border-gray-200 bg-white/70 p-6
            shadow-sm backdrop-blur-md transition-all duration-300
            hover:border-green-400/50 hover:shadow-lg
            dark:border-slate-800 dark:bg-[#11151b] dark:hover:border-lime-400/30
          "
        >
          <div className="flex items-center gap-2 text-green-600 dark:text-lime-400">
            <CheckCircle2 size={18} />
            <span className="text-[10px] font-bold uppercase tracking-wider">Philosophy</span>
          </div>

          <h5 className="mt-3 text-base font-bold text-gray-900 dark:text-white">
            Quality & Performance
          </h5>

          <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-slate-400">
            Prioritizing pixel-perfect interfaces, accessibility, clean architecture, and responsive design across all devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;