import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

function BottomCTA() {
  return (
    <section className="px-4 pb-20 pt-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-slate-800
            bg-[#0d1014]
            px-6 py-14
            text-center
            sm:px-10 sm:py-20
          "
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-0
              h-40 w-80
              -translate-x-1/2
              rounded-full
              bg-lime-400/10
              blur-3xl
            "
          />

          {/* Small label */}
          <p
            className="
              relative
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-lime-400
            "
          >
            LET'S CONNECT
          </p>

          {/* Main heading */}
          <h2
            className="
              relative
              mt-4
              text-3xl
              font-black
              uppercase
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            LET'S BUILD
            <br />
            SOMETHING USEFUL
          </h2>

          {/* Description */}
          <p
            className="
              relative
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            Open to software engineering opportunities, meaningful
            collaborations, interesting projects, and AI-powered ideas.
          </p>

          {/* Buttons */}
          <div
            className="
              relative
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            {/* Contact */}
            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-lime-400
                px-6
                py-3
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-lime-300
              "
            >
              Get In Touch

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

            {/* Resume */}
            <a
              href="/Resume.pdf"
              download
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-700
                bg-black/30
                px-6
                py-3
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-slate-300
                transition-all
                duration-300
                hover:border-lime-400
                hover:text-lime-400
              "
            >
              View Resume

              <Download
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          {/* Journey link */}
          <Link
            to="/journey"
            className="
              relative
              mt-8
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-slate-500
              transition-colors
              hover:text-lime-400
            "
          >
            View Journey

            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BottomCTA;