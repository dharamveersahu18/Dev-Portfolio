import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  // Recalculate horizontal travel distance & dynamic scroll height
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calculateDistance = () => {
      const container = track.parentElement;
      if (!container) return;

      const maxDistance = Math.max(
        0,
        track.scrollWidth - container.clientWidth
      );

      setDistance(maxDistance);
    };

    calculateDistance();

    const observer = new ResizeObserver(calculateDistance);
    observer.observe(track);

    if (track.parentElement) {
      observer.observe(track.parentElement);
    }

    // Recalculate after project images finish loading
    const images = track.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", calculateDistance);
        img.addEventListener("error", calculateDistance);
      }
    });

    window.addEventListener("resize", calculateDistance);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateDistance);

      images.forEach((img) => {
        img.removeEventListener("load", calculateDistance);
        img.removeEventListener("error", calculateDistance);
      });
    };
  }, []);

  // Connect vertical scrolling to horizontal movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -distance]
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        bg-[#f4f7f0] text-[#172019]
        transition-colors duration-500
        dark:bg-[#0b0d10] dark:text-white
      "
      style={{
        // Improved: Exact height sync matching horizontal scroll distance + 1vh viewport buffer
        height: distance > 0 ? `calc(100vh + ${distance}px)` : "300vh",
      }}
    >
      <div
        className="
          sticky top-0 flex h-screen flex-col
          justify-between overflow-hidden
          py-6 sm:py-8 lg:py-10
        "
      >
        {/* Header */}
        <div className="mx-auto w-full max-w-7xl shrink-0 px-6 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-lime-400 sm:text-sm">
                Selected Work
              </p>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-6xl">
                Projects I've{" "}
                <span className="text-green-600 dark:text-lime-400">
                  built.
                </span>
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-gray-500 dark:text-gray-400 md:block">
              A collection of ideas, experiments, and products
              I've been building.
            </p>
          </div>
        </div>

        {/* Horizontal Project Track */}
        <div className="flex min-h-0 flex-1 items-center overflow-hidden py-6">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="
              flex h-fit w-max items-center
              gap-5 px-6
              sm:gap-6 sm:px-8
              lg:gap-8 lg:px-10
              will-change-transform
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

        {/* Scroll Indicator */}
        <div className="flex shrink-0 items-center justify-center gap-4">
          <span className="h-px w-8 bg-gray-300 dark:bg-gray-700" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 sm:text-xs">
            Scroll to explore
          </p>

          <span className="h-px w-8 bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    </section>
  );
}

export default Projects;