import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article
      className="
        group flex w-[85vw] max-w-[360px] flex-none flex-col overflow-hidden rounded-2xl
        border border-white/10 bg-[#111418] transition-all duration-300
        hover:border-lime-400/30 sm:w-[380px] lg:w-[400px]
      "
    >
      {/* VIDEO / IMAGE HEADER */}
      <div className="relative h-[160px] w-full shrink-0 overflow-hidden sm:h-[180px]">
        <video
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-transparent to-black/20" />

        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-md">
          {project.number}
        </span>

        <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 text-[10px] text-neutral-300 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-lime-400">
              {project.tech}
            </p>
            <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
              {project.title}
            </h3>
          </div>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400 text-black transition-transform duration-300 hover:scale-110"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="line-clamp-2 text-xs leading-relaxed text-neutral-400">
          {project.description}
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3 py-1.5 text-xs font-semibold text-neutral-300 transition-colors hover:border-lime-400 hover:text-lime-400"
          >
            <FaGithub size={13} />
            GitHub
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-lime-400 px-3 py-1.5 text-xs font-semibold text-black transition-transform hover:scale-105"
          >
            Live Demo
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;