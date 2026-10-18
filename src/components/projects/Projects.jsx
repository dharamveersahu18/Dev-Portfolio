
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import BackButton from "../BackButton/BackButton";

function Projects({ showBackButton = false }) {
  return (
    <section
      id="projects"
      className="
        bg-[#f4f7f0] text-[#172019]
        transition-colors duration-500
        dark:bg-[#0b0d10] dark:text-white
        py-16 sm:py-20 lg:py-24
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {showBackButton && (
          <div className="mb-10">
            <BackButton />
          </div>
        )}

        {/* Section Heading */}
        <div className="mb-9 sm:mb-12 lg:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-green-600 dark:text-lime-400 sm:text-sm">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Projects I've{" "}
            <span className="text-green-600 dark:text-lime-400">
              built.
            </span>
          </h2>
        </div>

        {/* Responsive Project Grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title || project.number}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
