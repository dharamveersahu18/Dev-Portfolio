import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article
      className="
        group flex h-full min-h-0 w-[85vw] max-w-[560px] flex-none flex-col overflow-hidden rounded-3xl
        border border-gray-200 bg-white transition-all duration-500
        hover:border-green-400/40 dark:border-white/10 dark:bg-[#111418] dark:hover:border-lime-400/30
        sm:w-[70vw] md:w-[500px] xl:w-[560px]
      "
    >
      {/* VIDEO SECTION */}
      <div className="relative h-[42%] shrink-0 overflow-hidden">
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-black/5 dark:from-[#111418] dark:to-black/20" />

        {/* NUMBER */}
        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-[10px] font-medium text-gray-800 backdrop-blur-md dark:border-white/20 dark:bg-black/50 dark:text-white sm:text-xs">
          {project.number}
        </span>

        {/* CATEGORY */}
        <span className="absolute right-4 top-4 max-w-[130px] truncate rounded-full border border-white/40 bg-white/70 px-3 py-1 text-[10px] text-gray-700 backdrop-blur-md dark:border-white/20 dark:bg-black/50 dark:text-gray-300 sm:text-xs">
          {project.category}
        </span>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex min-h-0 flex-1 flex-col justify-between p-4 sm:p-5 lg:p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="mb-0.5 text-xs font-medium text-green-600 dark:text-lime-400 sm:text-sm">
                {project.tech}
              </p>
              <h3 className="text-xl font-bold tracking-tight text-[#172019] dark:text-white sm:text-2xl lg:text-3xl">
                {project.title}
              </h3>
            </div>

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-black transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400 sm:text-sm">
            {project.description}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-2 pt-3 sm:gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-3.5 py-1.5 text-xs font-semibold text-gray-700 transition-all duration-300 hover:border-green-500 hover:text-green-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-lime-400 dark:hover:text-lime-400 sm:px-4 sm:py-2 sm:text-sm"
          >
            <FaGithub size={15} />
            GitHub
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lime-400 to-green-500 px-3.5 py-1.5 text-xs font-semibold text-black transition-all duration-300 hover:scale-105 sm:px-4 sm:py-2 sm:text-sm"
          >
            Live Demo
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;