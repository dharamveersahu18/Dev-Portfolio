import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import NexusPost from "../../assets/clips/NexusPost.mp4";
import project2 from "../../assets/clips/project2.mp4";
import project3 from "../../assets/clips/project3.mp4";

import ProjectCard from "./ProjectCard";

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [distance, setDistance] = useState(0);

  // ==========================================
  // PROJECT DATA
  // ==========================================

  const projects = [
    {
      number: "01",
      title: "NexusPost",
      description:
        "A modern blogging platform built with React and Appwrite.",
      category: "Blog Platform",
      tech: "React • Appwrite",
      video: NexusPost,
      github: "https://github.com/dharamveersahu18/Blog",
      liveDemo: "#",
    },

    {
      number: "02",
      title: "Portfolio",
      description:
        "A modern developer portfolio focused on clean UI and responsive design.",
      category: "Portfolio",
      tech: "React • Tailwind",
      video: project2,
      github: "https://github.com/dharamveersahu18",
      liveDemo: "#",
    },

    {
      number: "03",
      title: "GameVerse",
      description:
        "A gaming platform with an interactive interface and dynamic content.",
      category: "Web Application",
      tech: "React • JavaScript",
      video: project3,
      github: "https://github.com/dharamveersahu18",
      liveDemo: "#",
    },
  ];

  // ==========================================
  // CALCULATE HORIZONTAL DISTANCE
  // ==========================================

  useEffect(() => {
    const calculateDistance = () => {
      if (!trackRef.current) return;

      const track = trackRef.current;
      const parent = track.parentElement;

      if (!parent) return;

      const scrollWidth = track.scrollWidth;
      const visibleWidth = parent.clientWidth;

      const calculatedDistance = Math.max(
        0,
        scrollWidth - visibleWidth
      );

      setDistance(calculatedDistance);
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  // ==========================================
  // VERTICAL SCROLL
  // ==========================================

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Vertical scroll → horizontal movement
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -distance]
  );

  // ==========================================
  // UI
  // ==========================================

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
        relative

        bg-[#f4f7f0]
        text-[#172019]

        transition-colors
        duration-500

        dark:bg-[#0b0d10]
        dark:text-white
      "
      style={{
        height: `${Math.max(projects.length * 75, 300)}vh`,
      }}
    >
      {/* ==========================================
          STICKY VIEWPORT
      ========================================== */}

      <div
        className="
          sticky
          top-0

          flex
          h-[100svh]
          min-h-[620px]
          flex-col
          overflow-hidden

          pt-5
          pb-28

          sm:pt-7
          sm:pb-28

          lg:pt-8
          lg:pb-24
        "
      >
        {/* ==========================================
            HEADER
        ========================================== */}

        <div
          className="
            mx-auto
            mb-8
            w-full
            max-w-7xl
            shrink-0
            px-6

            sm:mb-10
            sm:px-8

            lg:mb-12
            lg:px-10
          "
        >
          <div className="flex items-end justify-between">
            {/* LEFT SIDE */}

            <div>
              <p
                className="
                  mb-2

                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-green-600

                  sm:mb-3
                  sm:text-sm

                  dark:text-lime-400
                "
              >
                Selected Work
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight

                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Projects I've{" "}
                <span
                  className="
                    text-green-600
                    dark:text-lime-400
                  "
                >
                  built.
                </span>
              </h2>
            </div>

            {/* RIGHT SIDE */}

            <p
              className="
                hidden
                max-w-sm
                text-right
                text-sm
                leading-6
                text-gray-500

                md:block

                dark:text-gray-500
              "
            >
              Scroll down to explore my projects
              and see what I've been building.
            </p>
          </div>
        </div>

        {/* ==========================================
            HORIZONTAL PROJECT TRACK
        ========================================== */}

        <div
          className="
            min-h-0
            flex-1
            overflow-hidden
          "
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="
              flex
              h-full
              items-stretch

              gap-6
              px-6

              sm:gap-7
              sm:px-8

              lg:gap-8
              lg:px-10
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}
          </motion.div>
        </div>

        {/* ==========================================
            SCROLL INDICATOR
        ========================================== */}

        <div
          className="
            mt-4
            flex
            shrink-0
            justify-center

            sm:mt-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3

              text-[10px]
              tracking-wide
              text-gray-500

              sm:text-xs

              dark:text-gray-500
            "
          >
            <span
              className="
                h-px
                w-7
                bg-gray-300

                sm:w-10

                dark:bg-gray-700
              "
            />

            SCROLL TO EXPLORE

            <span
              className="
                h-px
                w-7
                bg-gray-300

                sm:w-10

                dark:bg-gray-700
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;