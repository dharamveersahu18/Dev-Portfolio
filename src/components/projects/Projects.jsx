


import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import NexusPost from "../../assets/clips/NexusPost.mp4";
import project2 from "../../assets/clips/project2.mp4";
import project3 from "../../assets/clips/project3.mp4";

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [distance, setDistance] = useState(0);

  // =================================================
  // PROJECT DATA
  // =================================================

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

  // =================================================
  // CALCULATE HORIZONTAL DISTANCE
  // =================================================

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

  // =================================================
  // VERTICAL SCROLL
  // =================================================

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
      {/* =================================================
          STICKY VIEWPORT
      ================================================= */}

      <div
        className="
          sticky
          top-0
          flex
          h-[100svh]
          min-h-[620px]
          flex-col
          overflow-hidden

          px-0
          pt-5
          pb-28

          sm:pt-7
          sm:pb-28

          lg:pt-8
          lg:pb-24
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mx-auto
            mb-5
            w-full
            max-w-7xl
            shrink-0
            px-5

            sm:mb-7
            sm:px-6

            lg:mb-8
          "
        >
          <div className="flex items-end justify-between">
            {/* LEFT */}

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

            {/* RIGHT */}

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

        {/* =================================================
            HORIZONTAL TRACK
        ================================================= */}

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
              gap-4
              px-5

              sm:gap-5
              sm:px-6

              lg:gap-6
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

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

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

// =================================================
// PROJECT CARD
// =================================================

function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        flex
        h-full
        min-h-0
        w-[88vw]
        max-w-[620px]
        flex-none
        flex-col
        overflow-hidden
        rounded-3xl

        border
        border-gray-200
        bg-white

        transition-all
        duration-500

        hover:border-green-400/40

        dark:border-white/10
        dark:bg-[#111418]
        dark:hover:border-lime-400/30

        sm:w-[72vw]

        lg:w-[620px]
      "
    >
      {/* =================================================
          VIDEO
      ================================================= */}

      <div
        className="
          relative
          h-[150px]
          shrink-0
          overflow-hidden

          sm:h-[210px]

          lg:h-[270px]
        "
      >
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700

            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-white/90
            via-transparent
            to-black/5

            dark:from-[#111418]
            dark:via-transparent
            dark:to-black/20
          "
        />

        {/* =================================================
            NUMBER
        ================================================= */}

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/40
            bg-white/70
            px-3
            py-1
            text-[10px]
            font-medium
            text-gray-800
            backdrop-blur-md

            sm:left-5
            sm:top-5
            sm:text-xs

            dark:border-white/20
            dark:bg-black/50
            dark:text-white
          "
        >
          {project.number}
        </span>

        {/* =================================================
            CATEGORY
        ================================================= */}

        <span
          className="
            absolute
            right-4
            top-4
            max-w-[130px]
            truncate
            rounded-full
            border
            border-white/40
            bg-white/70
            px-3
            py-1
            text-[10px]
            text-gray-700
            backdrop-blur-md

            sm:right-5
            sm:top-5
            sm:text-xs

            dark:border-white/20
            dark:bg-black/50
            dark:text-gray-300
          "
        >
          {project.category}
        </span>
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          flex
          min-h-0
          flex-1
          flex-col
          p-4

          sm:p-6

          lg:p-7
        "
      >
        {/* =================================================
            TITLE ROW
        ================================================= */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-3
          "
        >
          <div className="min-w-0">
            {/* Technology */}

            <p
              className="
                mb-1
                text-xs
                font-medium
                text-green-600

                sm:mb-2
                sm:text-sm

                dark:text-lime-400
              "
            >
              {project.tech}
            </p>

            {/* Title */}

            <h3
              className="
                text-2xl
                font-bold
                tracking-tight
                text-[#172019]

                sm:text-3xl

                lg:text-4xl

                dark:text-white
              "
            >
              {project.title}
            </h3>
          </div>

          {/* =================================================
              ARROW BUTTON
          ================================================= */}

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="
              flex
              h-10
              w-10
              flex-none
              items-center
              justify-center
              rounded-full

              bg-gradient-to-r
              from-lime-400
              to-green-500

              text-black

              transition-all
              duration-300

              hover:scale-110
              hover:shadow-lg
              hover:shadow-green-500/20

              sm:h-11
              sm:w-11
            "
          >
            <ArrowUpRight size={19} />
          </a>
        </div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-3
            max-w-lg
            text-xs
            leading-5
            text-gray-600

            sm:mt-4
            sm:text-sm
            sm:leading-6

            lg:text-base

            dark:text-gray-400
          "
        >
          {project.description}
        </p>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          className="
            mt-auto
            flex
            flex-wrap
            gap-2
            pt-4

            sm:gap-3
            sm:pt-5
          "
        >
          {/* GitHub */}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-gray-300
              px-4
              py-2
              text-xs
              font-semibold
              text-gray-700

              transition-all
              duration-300

              hover:border-green-500
              hover:text-green-600

              sm:px-5
              sm:py-2.5
              sm:text-sm

              dark:border-gray-700
              dark:text-gray-300
              dark:hover:border-lime-400
              dark:hover:text-lime-400
            "
          >
            <FaGithub size={17} />

            GitHub
          </a>

          {/* Live Demo */}

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full

              bg-gradient-to-r
              from-lime-400
              to-green-500

              px-4
              py-2

              text-xs
              font-semibold
              text-black

              transition-all
              duration-300

              hover:scale-105
              hover:shadow-lg
              hover:shadow-green-500/20

              sm:px-5
              sm:py-2.5
              sm:text-sm
            "
          >
            Live Demo

            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default Projects;