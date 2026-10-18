
import { ArrowUpRight, GitBranch } from "lucide-react";

function ProjectCard({ project }) {
  const title = project?.title || "Untitled Project";
  const image = project?.image;
  const bgImage = project?.bgImage || image;

  const tags = (project?.tags || [project?.category]).filter(Boolean);

  return (
    <article
      className="
        group relative isolate flex h-full min-h-[520px]
        w-full flex-col justify-between overflow-hidden
        rounded-2xl border border-white/10 bg-[#090a0f]
        shadow-xl shadow-black/20
        sm:min-h-[560px] sm:rounded-3xl
        lg:min-h-[580px]
      "
    >
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="
              h-full w-full object-cover object-center
              opacity-40 transition-transform duration-700
              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* Background Overlay */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b from-[#090a0f]/70
          via-[#090a0f]/80 to-[#090a0f]
        "
      />

      {/* Technology Tags */}
      <div className="flex flex-wrap justify-start gap-2 px-4 pt-4 sm:px-6 sm:pt-6">
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="
              rounded-full border border-white/15
              bg-black/35 px-2.5 py-1
              text-[10px] font-medium text-white/90
              backdrop-blur-md sm:px-3 sm:text-xs
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Preview */}
      <div className="my-6 flex w-full items-center justify-center px-4 sm:my-7 sm:px-6">
        <div
          className="
            w-full overflow-hidden rounded-xl
            border border-white/15 bg-black/90
            p-1.5 shadow-2xl
            transition-transform duration-500
            group-hover:-translate-y-1
          "
        >
          {/* Browser Header */}
          <div className="flex h-7 items-center justify-between px-2">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>

            <span className="max-w-[65%] truncate font-mono text-[9px] uppercase tracking-wider text-white/40">
              {title.toLowerCase().replace(/\s+/g, "")}.app
            </span>
          </div>

          {/* Actual Project Screenshot */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-900">
            {image ? (
              <img
                src={image}
                alt={`${title} project preview`}
                loading="lazy"
                className="
                  h-full w-full object-cover object-top
                  transition-transform duration-700
                  group-hover:scale-[1.03]
                "
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-white/50">
                Project Preview
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-auto px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="flex items-end justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3
              className="
                text-lg font-bold leading-snug tracking-tight
                text-white transition-colors duration-300
                group-hover:text-lime-300
                sm:text-xl lg:text-2xl
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-2 line-clamp-3 text-xs leading-relaxed
                text-white/70 sm:text-sm
              "
            >
              {project?.description || "Explore this project."}
            </p>
          </div>

          {/* Project Links */}
          <div className="flex shrink-0 items-center gap-2">
            {project?.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border border-white/20
                  bg-white/10 text-white backdrop-blur-md
                  transition-all duration-300
                  hover:scale-110 hover:bg-white/20
                  sm:h-10 sm:w-10
                "
              >
                <GitBranch size={17} />
              </a>
            )}

            {project?.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live app`}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-lime-400 text-black
                  shadow-lg shadow-lime-400/20
                  transition-all duration-300
                  hover:scale-110 hover:bg-lime-300
                  sm:h-11 sm:w-11
                "
              >
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
