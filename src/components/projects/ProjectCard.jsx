import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        flex
        h-full
        min-h-0
        w-[85vw]
        max-w-[600px]
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
        lg:w-[600px]
      "
    >
      {/* ==========================================
          PROJECT VIDEO
      ========================================== */}

      <div
        className="
          relative
          h-[150px]
          shrink-0
          overflow-hidden

          sm:h-[200px]
          lg:h-[235px]
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

        {/* Video Overlay */}
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

        {/* ==========================================
            PROJECT NUMBER
        ========================================== */}

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

        {/* ==========================================
            PROJECT CATEGORY
        ========================================== */}

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

      {/* ==========================================
          PROJECT CONTENT
      ========================================== */}

      <div
        className="
          flex
          min-h-0
          flex-1
          flex-col

          p-5

          sm:p-6

          lg:p-7
        "
      >
        {/* ==========================================
            TITLE + LIVE ARROW
        ========================================== */}

        <div
          className="
            flex
            items-start
            justify-between
            gap-3
          "
        >
          {/* Title */}
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

            {/* Project Name */}
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

          {/* Live Demo Arrow */}
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

        {/* ==========================================
            DESCRIPTION
        ========================================== */}

        <p
          className="
            mt-3
            max-w-lg

            line-clamp-2

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

        {/* ==========================================
            BUTTONS
        ========================================== */}

        <div
          className="
            mt-auto

            flex
            flex-wrap
            items-center
            gap-2

            pt-5

            sm:gap-3
            sm:pt-6
          "
        >
          {/* GitHub Button */}
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

          {/* Live Demo Button */}
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

export default ProjectCard;