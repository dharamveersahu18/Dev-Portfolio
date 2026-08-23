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

  const projects = [
    {
      number: "01",
      title: "NexusPost",
      description: "A modern blogging platform built with React and Appwrite.",
      category: "Blog Platform",
      tech: "React • Appwrite",
      video: NexusPost,
      github: "https://github.com/dharamveersahu18/Blog",
      liveDemo: "#",
    },
    {
      number: "02",
      title: "Portfolio",
      description: "A modern developer portfolio focused on clean UI and responsive design.",
      category: "Portfolio",
      tech: "React • Tailwind",
      video: project2,
      github: "https://github.com/dharamveersahu18",
      liveDemo: "#",
    },
    {
      number: "03",
      title: "GameVerse",
      description: "A gaming platform with an interactive interface and dynamic content.",
      category: "Web Application",
      tech: "React • JavaScript",
      video: project3,
      github: "https://github.com/dharamveersahu18",
      liveDemo: "#",
    },
  ];

  useEffect(() => {
    const calculateDistance = () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      const parent = track.parentElement;
      if (!parent) return;

      const scrollWidth = track.scrollWidth;
      const visibleWidth = parent.clientWidth;
      setDistance(Math.max(0, scrollWidth - visibleWidth));
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#f4f7f0] text-[#172019] transition-colors duration-500 dark:bg-[#0b0d10] dark:text-white"
      style={{ height: `${Math.max(projects.length * 100, 300)}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden py-6 lg:py-8">
        {/* HEADER */}
        <div className="mx-auto mb-4 w-full max-w-7xl shrink-0 px-6 sm:mb-6 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-green-600 dark:text-lime-400 sm:text-sm">
                Selected Work
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Projects I've{" "}
                <span className="text-green-600 dark:text-lime-400">built.</span>
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-xs text-gray-500 md:block lg:text-sm dark:text-gray-400">
              Scroll down to explore my projects and see what I've been building.
            </p>
          </div>
        </div>

        {/* HORIZONTAL TRACK */}
        <div className="min-h-0 flex-1 overflow-hidden py-2">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-full items-stretch gap-6 px-6 sm:px-8 lg:gap-8 lg:px-10"
          >
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-2 flex shrink-0 justify-center pb-12 sm:pb-16">
          <div className="flex items-center gap-3 text-[10px] tracking-wide text-gray-500 dark:text-gray-400 sm:text-xs">
            <span className="h-px w-8 bg-gray-300 dark:bg-gray-700" />
            SCROLL TO EXPLORE
            <span className="h-px w-8 bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;