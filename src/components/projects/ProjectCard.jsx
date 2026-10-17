import {
  ArrowUpRight,
  Smartphone,
  Tablet,
  Monitor,
  GitBranch,
} from "lucide-react";

function ProjectCard({ project }) {
  const title = project?.title || "Untitled Project";
  const image = project?.image;
  const bgImage = project?.bgImage || image;

  const tags = (project?.tags || [project?.category]).filter(Boolean);

  return (
    <article
      className="
        group relative flex
        h-[560px] w-[320px] flex-none
        flex-col justify-between
        overflow-hidden rounded-3xl
        border border-white/10
        bg-[#090a0f]
        shadow-2xl shadow-black/50
        sm:h-[600px] sm:w-[380px]
        lg:h-[630px] lg:w-[445px]
      "
    >
      {/* Background Canvas (Immersive Card Backdrop) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bgImage && (
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="
              h-full w-full scale-100
              object-cover object-center
              opacity-65
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        )}
        {/* Dark Gradient Overlay to match reference styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-black/40" />
      </div>

      {/* Top Header: Number & Tags */}
      <div className="relative z-10 flex items-start justify-between gap-3 p-5 sm:p-6">
        <span
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-full border border-white/20
            bg-black/40 text-xs font-semibold text-white
            backdrop-blur-md
          "
        >
          {project?.number || "01"}
        </span>

        {/* Technology Tags */}
        <div className="flex max-w-[75%] flex-wrap justify-end gap-1.5">
          {tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="
                rounded-full border border-white/20
                bg-black/40 px-3 py-1
                text-[10px] font-medium text-white/90
                backdrop-blur-md sm:text-[11px]
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Screenshot / Browser Mockup */}
      <div className="relative z-10 my-auto flex items-center justify-center px-5 sm:px-6">
        <div
          className="
            relative aspect-[16/10] w-full max-w-[340px]
            rounded-xl border border-white/20
            bg-black/90 p-2
            shadow-2xl backdrop-blur-md
            transition-transform duration-500 ease-out
            group-hover:-translate-y-2
            group-hover:scale-[1.02]
          "
        >
          {/* Browser Header */}
          <div className="mb-2 flex items-center justify-between px-1">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>

            <span className="max-w-[65%] truncate font-mono text-[9px] uppercase tracking-wider text-white/40">
              {title.toLowerCase().replace(/\s+/g, "")}.app
            </span>
          </div>

          {/* Actual Project Image */}
          <div className="relative h-[calc(100%-24px)] w-full overflow-hidden rounded-lg bg-zinc-900">
            {image ? (
              <img
                src={image}
                alt={`${title} dashboard preview`}
                loading="lazy"
                className="
                  h-full w-full object-cover object-top
                  transition-transform duration-700
                  group-hover:scale-105
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

      {/* Bottom Content & Action Button */}
      <div className="relative z-10 p-5 pt-0 sm:p-6 sm:pt-0">
        <div className="flex items-end justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-lime-300 sm:text-2xl">
              {title}
            </h3>

            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/70">
              {project?.description || "Explore this project."}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex shrink-0 items-center gap-2">
            {project?.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/20
                  bg-white/10 text-white backdrop-blur-md
                  transition-all duration-300
                  hover:scale-110 hover:border-white/40
                  hover:bg-white/20
                  sm:h-11 sm:w-11
                "
              >
                <GitBranch size={18} />
              </a>
            )}

            {project?.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live app`}
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full bg-lime-400 text-black
                  shadow-lg shadow-lime-400/20
                  transition-all duration-300
                  hover:scale-110 hover:bg-lime-300
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
