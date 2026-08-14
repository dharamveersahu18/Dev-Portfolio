import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../assets/images/Profile.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[#f4f7f0]
        text-[#172019]
        transition-colors duration-500
        dark:bg-[#0b0d10]
        dark:text-white
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          -z-0
          h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-lime-400/10
          blur-[120px]
        "
      />

      {/* =====================================================
          📱 MOBILE HERO
          Nikhil-style layout
          Only visible below lg
      ====================================================== */}

      <div className="relative z-10 px-4 pb-16 pt-28 lg:hidden">

        <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-xl flex-col items-center text-center">

          {/* ================= PROFILE ================= */}

          <div className="relative mb-10">

            {/* Glow */}
            <div
              className="
                absolute inset-[-25px]
                rounded-full
                bg-lime-400/10
                blur-2xl
              "
            />

            {/* Rings */}
            <div
              className="
                absolute inset-[-15px]
                rounded-full
                border
                border-green-500/20
                dark:border-lime-400/20
              "
            />

            <div
              className="
                absolute inset-[-7px]
                rounded-full
                border-2
                border-green-500/40
                dark:border-lime-400/40
              "
            />

            {/* Image */}
            <div
              className="
                relative
                h-[240px] w-[240px]
                overflow-hidden
                rounded-full
                border-4
                border-lime-400
                bg-gradient-to-br
                from-lime-300
                to-green-500
                shadow-[0_0_50px_rgba(163,230,53,0.18)]

                sm:h-[280px]
                sm:w-[280px]
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
                "
              />
            </div>

            {/* Available */}
            <div
              className="
                absolute
                bottom-0
                left-1/2
                flex
                -translate-x-1/2
                items-center
                gap-2
                whitespace-nowrap
                rounded-full
                bg-lime-400
                px-5
                py-2
                text-sm
                font-bold
                text-black
                shadow-lg
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-black" />

              AVAILABLE!
            </div>

          </div>


          {/* ================= WELCOME ================= */}

          <div
            className="
              mb-6
              flex
              items-center
              gap-2
              rounded-full
              border
              border-green-500/30
              bg-green-500/5
              px-5
              py-2
              text-sm
              font-semibold
              text-green-600
              dark:border-lime-400/30
              dark:bg-lime-400/5
              dark:text-lime-400
            "
          >
            <span className="h-2 w-2 rounded-full bg-green-500 dark:bg-lime-400" />

            WELCOME TO MY PORTFOLIO
          </div>


          {/* ================= NAME ================= */}

          <h1
            className="
              text-5xl
              font-black
              uppercase
              leading-[0.95]
              tracking-[-0.04em]

              sm:text-6xl
            "
          >
            DHARAMVEER{" "}

            <span className="text-green-600 dark:text-lime-400">
              SAHU
            </span>
          </h1>


          {/* ================= ROLE ================= */}

          <h2
            className="
              mt-6
              text-sm
              font-bold
              uppercase
              tracking-[0.15em]
              text-green-600
              dark:text-lime-400
            "
          >
            // FRONTEND DEVELOPER & PROBLEM SOLVER
          </h2>


          {/* ================= SKILLS ================= */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >

            <span className="rounded-lg border border-gray-300 bg-white/40 px-4 py-2 text-sm font-semibold dark:border-white/10 dark:bg-white/5">
              ⚛️ React
            </span>

            <span className="rounded-lg border border-gray-300 bg-white/40 px-4 py-2 text-sm font-semibold dark:border-white/10 dark:bg-white/5">
              ⚡ JavaScript
            </span>

            <span className="rounded-lg border border-gray-300 bg-white/40 px-4 py-2 text-sm font-semibold dark:border-white/10 dark:bg-white/5">
              🧠 DSA
            </span>

            <span className="rounded-lg border border-gray-300 bg-white/40 px-4 py-2 text-sm font-semibold dark:border-white/10 dark:bg-white/5">
              💻 Full Stack
            </span>

          </div>


          {/* ================= TAGLINE ================= */}

          <h3
            className="
              mt-8
              max-w-md
              text-2xl
              font-bold
              leading-tight
            "
          >
            Building{" "}

            <span className="text-green-600 dark:text-lime-400">
              Modern & Responsive
            </span>{" "}

            Web Experiences
          </h3>


          {/* ================= EDUCATION ================= */}

          <p
            className="
              mt-6
              text-sm
              font-medium
              text-gray-500
              dark:text-gray-400
            "
          >
            🎓 BSc Computer Science · SSIPS, Raipur, India
          </p>


          {/* ================= STATUS ================= */}

          <div
            className="
              mt-4
              rounded-lg
              border
              border-green-500/30
              bg-green-500/5
              px-4
              py-2
              text-sm
              font-semibold
              text-green-600
              dark:border-lime-400/20
              dark:bg-lime-400/5
              dark:text-lime-400
            "
          >
            🚀 Open for Internships & Freelance
          </div>


          {/* ================= SOCIALS ================= */}

          <div className="mt-6 flex gap-3">

            <a
              href="https://github.com/dharamveersahu18"
              target="_blank"
              rel="noreferrer"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-gray-300
                text-gray-600
                transition
                hover:border-green-500
                hover:text-green-600
                dark:border-white/10
                dark:text-gray-400
                dark:hover:border-lime-400
                dark:hover:text-lime-400
              "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/dharamveer-sahu/"
              target="_blank"
              rel="noreferrer"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-gray-300
                text-gray-600
                transition
                hover:border-green-500
                hover:text-green-600
                dark:border-white/10
                dark:text-gray-400
                dark:hover:border-lime-400
                dark:hover:text-lime-400
              "
            >
              <FaLinkedin size={18} />
            </a>

          </div>


          {/* ================= MOBILE BUTTONS ================= */}

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <a
              href="#projects"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-lime-400
                to-green-500
                px-6
                py-3
                font-bold
                text-black
                transition
                hover:-translate-y-1
              "
            >
              View Projects

              <ArrowUpRight
                size={18}
                className="
                  transition
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

           <Link to="/contact" 
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-300
                px-6
                py-3
                font-bold
                text-gray-700
                transition
                hover:border-green-500
                hover:text-green-600
                dark:border-white/10
                dark:text-gray-300
                dark:hover:border-lime-400
                dark:hover:text-lime-400
              "
            >
              Contact Me
              <Mail size={17} />
</Link>
            

          </div>

        </div>
      </div>


      {/* =====================================================
          💻 LAPTOP + DESKTOP HERO
          YOUR ORIGINAL LAYOUT
          Nikhil content adapted to your profile
          Visible from lg and above
      ====================================================== */}

      <div className="relative z-10 hidden px-6 py-20 lg:block">

        <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center">

          <div className="grid w-full items-center gap-16 lg:grid-cols-2">


            {/* ================= LEFT ================= */}

            <div className="relative z-10">

              {/* Intro */}

              <div className="mb-6 flex items-center gap-3">

                <span
                  className="
                    h-2.5 w-2.5
                    rounded-full
                    bg-lime-400
                  "
                />

                <p className="text-sm font-medium text-gray-400">
                  Welcome to my portfolio 👋
                </p>

              </div>


              {/* NAME */}

              <h1
                className="
                  text-6xl
                  font-black
                  uppercase
                  tracking-tight
                  xl:text-7xl
                "
              >
                Dharamveer
                <br />

                <span className="text-green-600 dark:text-lime-400">
                  Sahu
                </span>
              </h1>


              {/* ROLE */}

              <h2
                className="
                  mt-6
                  text-2xl
                  font-semibold
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Frontend Developer &{" "}

                <span className="text-green-600 dark:text-lime-400">
                  Problem Solver
                </span>
              </h2>


              {/* NIKHIL-STYLE CONTENT,
                  ADAPTED FOR YOU */}

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-gray-600
                  dark:text-gray-400
                "
              >
                Building modern, responsive and user-friendly
                web applications with React and JavaScript.
                I enjoy solving DSA problems and continuously
                improving my development skills.
              </p>


              {/* SKILLS */}

              <div className="mt-6 flex flex-wrap gap-3">

                <span
                  className="
                    rounded-lg
                    border
                    border-gray-300
                    px-4 py-2
                    text-sm
                    font-semibold
                    dark:border-white/10
                  "
                >
                  ⚛️ React
                </span>

                <span
                  className="
                    rounded-lg
                    border
                    border-gray-300
                    px-4 py-2
                    text-sm
                    font-semibold
                    dark:border-white/10
                  "
                >
                  JavaScript
                </span>

                <span
                  className="
                    rounded-lg
                    border
                    border-gray-300
                    px-4 py-2
                    text-sm
                    font-semibold
                    dark:border-white/10
                  "
                >
                  DSA
                </span>

                <span
                  className="
                    rounded-lg
                    border
                    border-gray-300
                    px-4 py-2
                    text-sm
                    font-semibold
                    dark:border-white/10
                  "
                >
                  Full Stack
                </span>

              </div>


              {/* EDUCATION */}

              <p
                className="
                  mt-6
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                🎓 BSc Computer Science · SSIPS, Raipur, India
              </p>


              {/* STATUS */}

              <div
                className="
                  mt-4
                  inline-block
                  rounded-lg
                  border
                  border-green-500/30
                  bg-green-500/5
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-green-600
                  dark:text-lime-400
                "
              >
                🚀 Open for Internships & Freelance
              </div>


              {/* BUTTONS */}

              <div className="mt-9 flex flex-wrap gap-4">

                <Link to ="/projects"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-lime-400
                    to-green-500
                    px-6
                    py-3
                    font-semibold
                    text-black
                    transition
                    hover:scale-105
                  "
                >
                  View My Projects

                  <ArrowUpRight
                    size={18}
                    className="
                      transition
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>

                <Link to="/contact"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-300
                    px-6
                    py-3
                    font-semibold
                    text-gray-700
                    transition
                    hover:border-green-500
                    hover:text-green-600
                    dark:border-gray-700
                    dark:text-gray-300
                    dark:hover:border-lime-400
                    dark:hover:text-lime-400
                  "
                >
                  Contact Me

                  <Mail size={17} />
              </Link>

              </div>

            </div>


            {/* ================= RIGHT ================= */}

            <div
              className="
                relative
                flex
                min-h-[550px]
                items-center
                justify-center
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  h-[500px]
                  w-[500px]
                  rounded-full
                  bg-green-400/20
                  blur-3xl
                  dark:bg-lime-400/20
                "
              />


              {/* Main Circle */}

              <div
                className="
                  absolute
                  h-[440px]
                  w-[440px]
                  rounded-full
                  bg-gradient-to-br
                  from-lime-400
                  to-green-500
                "
              />


              {/* Outer Ring */}

              <div
                className="
                  absolute
                  h-[470px]
                  w-[470px]
                  rounded-full
                  border-2
                  border-green-500/30
                  dark:border-lime-400/30
                "
              />


              {/* Profile */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[540px]
                  w-[430px]
                  items-end
                  justify-center
                  overflow-hidden
                  rounded-[40%]
                "
              >
                <img
                  src={profile}
                  alt="Dharamveer Sahu"
                  className="
                    h-full
                    w-full
                    rounded-full
                    object-cover
                    object-[center_20%]
                  "
                />
              </div>


              {/* PROJECT CARD */}

              <div
                className="
                  absolute
                  bottom-5
                  left-0
                  z-20
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white/80
                  px-5
                  py-4
                  shadow-xl
                  backdrop-blur-md
                  dark:border-white/10
                  dark:bg-[#181a1f]/90
                "
              >

                <p className="text-xl font-bold dark:text-white">
                  10+
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Projects Built
                </p>

              </div>


              {/* CURRENTLY CARD */}

              <div
                className="
                  absolute
                  right-0
                  top-10
                  z-20
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white/80
                  px-5
                  py-4
                  shadow-xl
                  backdrop-blur-md
                  dark:border-white/10
                  dark:bg-[#181a1f]/90
                "
              >

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Currently
                </p>

                <p className="mt-1 font-semibold dark:text-white">
                  Learning & Building{" "}
                  <span className="text-green-600 dark:text-lime-400">
                    🚀
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;