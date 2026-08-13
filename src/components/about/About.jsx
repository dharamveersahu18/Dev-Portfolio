
import education from "../data/education";
import skills from "../data/skills"

import { useState } from "react";
import {
  GraduationCap,
  Code2,
  User,
  Calendar,
  BookOpen,
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

        <TabButton
          active={activeTab === "skills"}
          onClick={() => setActiveTab("skills")}
          icon={<Code2 size={18} />}
        >
          Skills
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

/* ================= SKILLS ================= */

function Skills() {
  return (
    <div>

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
          <Code2 size={25} />
        </div>

        <h3
          className="
            text-3xl font-bold
            text-green-600

            dark:text-lime-400
          "
        >
          Skills
        </h3>

      </div>

      <p
        className="
          mt-5
          text-gray-600

          dark:text-slate-400
        "
      >
        Technologies and tools I use while building projects.
      </p>

      <div
        className="
          mt-8
          grid grid-cols-2
          gap-4
          sm:grid-cols-3
          md:grid-cols-4
        "
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              rounded-xl
              border
              border-gray-200
              bg-white/70
              px-4 py-5
              text-center
              font-semibold
              text-gray-700
              shadow-sm
              transition-all duration-300

              hover:-translate-y-1
              hover:border-green-400/50
              hover:text-green-600

              dark:border-slate-800
              dark:bg-[#11151b]
              dark:text-slate-200
              dark:shadow-none
              dark:hover:border-lime-400/50
              dark:hover:text-lime-400
            "
          >
            {skill}
          </div>
        ))}
      </div>

    </div>
  );
}

/* ================= PROFILE ================= */

function Profile() {
  return (
    <div>

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
          <User size={25} />
        </div>

        <h3
          className="
            text-3xl font-bold
            text-green-600

            dark:text-lime-400
          "
        >
          Profile
        </h3>

      </div>

      {/* Profile Card */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-gray-200
          bg-white/70
          p-6
          shadow-sm
          backdrop-blur-md

          dark:border-slate-800
          dark:bg-[#11151b]
          dark:shadow-none
        "
      >

        <p
          className="
            leading-8
            text-gray-700

            dark:text-slate-300
          "
        >
          I'm a passionate developer who enjoys building modern web
          applications and solving programming problems. I focus on
          continuously improving my development skills and creating
          practical projects.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          <Info
            title="Focus"
            value="Frontend Development"
          />

          <Info
            title="Currently Learning"
            value="React & DSA"
          />

          <Info
            title="Projects"
            value="Web Applications"
          />

          <Info
            title="Goal"
            value="Software Developer"
          />

        </div>

      </div>

    </div>
  );
}

/* ================= INFO ================= */

function Info({ title, value }) {
  return (
    <div
      className="
        rounded-xl
        border
        border-gray-200
        bg-[#f4f7f0]
        p-4

        dark:border-slate-700
        dark:bg-[#0b0d10]
      "
    >
      <p
        className="
          text-xs
          uppercase
          tracking-wider
          text-gray-500

          dark:text-slate-500
        "
      >
        {title}
      </p>

      <p
        className="
          mt-1
          font-semibold
          text-gray-800

          dark:text-slate-200
        "
      >
        {value}
      </p>
    </div>
  );
}

export default About;