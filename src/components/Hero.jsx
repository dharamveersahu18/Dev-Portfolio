import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

import profile from "../assets/Profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0b0d10] px-6 py-20 text-white"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT ================= */}
          <div className="relative z-10">

            {/* Small intro */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />

              <p className="text-sm font-medium text-gray-400">
                Hello, I'm 👋
              </p>
            </div>

            {/* Name */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Dharamveer
              <br />

              <span className="text-lime-400">
                Sahu
              </span>
            </h1>

            {/* Role */}
            <h2 className="mt-6 text-xl font-semibold text-gray-300 sm:text-2xl">
              Frontend Developer &{" "}
              <span className="text-lime-400">
                Problem Solver
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I build modern, responsive web applications using
              React and JavaScript. I enjoy solving problems with
              DSA and continuously learning new technologies to
              become a better developer.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/dharamveersahu18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-lime-400"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/dharamveer-sahu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 hover:text-lime-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">

              {/* Projects */}
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-400 to-green-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20"
              >
                View My Projects

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="rounded-full border border-gray-700 px-6 py-3 font-semibold text-gray-300 transition-all duration-300 hover:border-lime-400 hover:text-lime-400"
              >
                Contact Me
              </a>

            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex min-h-[550px] items-center justify-center">

            {/* Soft lime glow */}
            <div
              className="
                absolute
                h-[320px] w-[320px]
                rounded-full
                bg-lime-400/20
                blur-3xl

                sm:h-[420px] sm:w-[420px]
                lg:h-[500px] lg:w-[500px]
              "
            />

            {/* Lime circle behind image */}
            <div
              className="
                absolute
                h-[280px] w-[280px]
                rounded-full
                bg-gradient-to-br from-lime-400 to-green-500

                sm:h-[370px] sm:w-[370px]
                lg:h-[440px] lg:w-[440px]
              "
            />

            {/* Outer ring */}
            <div
              className="
                absolute
                h-[310px] w-[310px]
                rounded-full
                border-2 border-lime-400/30

                sm:h-[400px] sm:w-[400px]
                lg:h-[470px] lg:w-[470px]
              "
            />

            {/* Profile Image */}
            <div
              className="
                relative
                z-10
                flex
                h-[380px]
                w-[300px]
                items-end
                justify-center
                overflow-hidden
                rounded-[40%]

                sm:h-[470px]
                sm:w-[370px]

                lg:h-[540px]
                lg:w-[430px]
              "
            >
              <img
                src={profile}
                alt="Dharamveer Sahu"
                className="
                  h-full
                  w-full
                  object-cover
                  object-[center_20%]
                  rounded-full
                "
              />
            </div>

            {/* Projects Card */}
            <div
              className="
                absolute
                bottom-5
                left-0
                z-20

                rounded-2xl
                border
                border-white/10
                bg-[#181a1f]/90
                px-5
                py-4
                shadow-2xl
                backdrop-blur-md

                sm:left-5
              "
            >
              <p className="text-xl font-bold text-white">
                10+
              </p>

              <p className="text-xs text-gray-400">
                Projects Built
              </p>
            </div>

            {/* Currently Learning Card */}
            <div
              className="
                absolute
                right-0
                top-10
                z-20

                rounded-2xl
                border
                border-white/10
                bg-[#181a1f]/90
                px-5
                py-4
                shadow-2xl
                backdrop-blur-md

                sm:right-5
              "
            >
              <p className="text-sm text-gray-400">
                Currently
              </p>

              <p className="mt-1 font-semibold text-white">
                Learning & Building{" "}
                <span className="text-lime-400">🚀</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;