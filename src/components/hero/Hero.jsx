import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import profile from "../../assets/images/Profile.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "motion/react";

/* ─── Word Flipper ─── */
const WORDS = [
  "AI Experiences",
  "Web Applications",
  "Scalable Backends",
  "Real-Time Systems",
];
function WordFlipper() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="inline-block relative overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[i]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-green-600 dark:text-lime-400 font-black"
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ════════════════════════════════════════════════════════════
   DESKTOP HERO
   ┌──────────────────────────────────────────────┐
   │  D  H  A  R  A  [PHOTO]  M  V  E  E  R      │  ← giant name
   │              [NAVBAR]                         │
   │  [stats]   [headline + CTA]   [traits+desc]  │  ← bottom row
   └──────────────────────────────────────────────┘
════════════════════════════════════════════════════════════ */
function DesktopHero({ loaded }) {
  const ease = [0.76, 0, 0.24, 1];

  /* scroll-driven photo blur + darken */
  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 380], [0, 18]);
  const darkOpacity = useTransform(scrollY, [0, 380], [0, 0.7]);
  const photoUp = useTransform(scrollY, [0, 500], [0, -60]);

  /* mouse → photo drifts */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });
  useEffect(() => {
    const fn = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 22);
      my.set((e.clientY / window.innerHeight - 0.5) * 14);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [mx, my]);

  /* letter stagger */
  const lv = (d) => ({
    hidden: { y: 140, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.9, delay: d, ease } },
  });

  /*  DHARAMVEER split:
      BACK  = D H A R A   (behind photo, z-0)
      FRONT = M V E E R   (in front of photo, z-20)
      This creates the depth illusion                  */
  const BACK = ["D", "H", "A", "R", "A"];
  const FRONT = ["M", "V", "E", "E", "R"];
  const TOTAL = BACK.length + FRONT.length; // 10

  /* Each letter gets flex: 1 so all 10 letters span 100% width equally */
  const letterBase =
    "flex-1 text-center font-black uppercase select-none leading-none tracking-tighter " +
    "text-green-600 dark:text-lime-400";
  const letterSize = {
    fontSize: "clamp(60px, 10.5vw, 175px)",
    lineHeight: 0.84,
  };

  return (
    <div
      className="relative hidden lg:block w-full min-h-screen overflow-hidden
                    bg-[#f4f7f0] dark:bg-[#0b0d10] text-[#172019] dark:text-white"
    >
      {/* ── ambient glow ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-[35%] h-[500px] w-[500px]
                        -translate-x-1/2 -translate-y-1/2 rounded-full
                        bg-lime-400/6 blur-[160px]"
        />
      </div>

      {/* ══════════════════════════════════════════
          LAYER 0 — BACK LETTERS  D H A R A
          these are BEHIND the photo
      ══════════════════════════════════════════ */}
      <div
        className="pointer-events-none select-none absolute inset-x-0 top-0 z-0
                      flex items-start overflow-hidden"
        style={{ height: "65%", paddingTop: "clamp(16px,4vh,48px)" }}
      >
        <div className="flex w-full">
          {BACK.map((l, i) => (
            <motion.span
              key={`back-${i}`}
              variants={lv(i * 0.055)}
              initial="hidden"
              animate={loaded ? "show" : "hidden"}
              className={letterBase}
              style={letterSize}
            >
              {l}
            </motion.span>
          ))}
          {/* spacer matching the FRONT letters' space */}
          <div className="flex-[5]" />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          LAYER 10 — PHOTO  (middle)
      ══════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 flex justify-center pointer-events-none"
        style={{ height: "80%", x: sx, y: photoUp }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.88, filter: "blur(28px)" }}
          animate={
            loaded ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}
          }
          transition={{ duration: 1.25, ease }}
          className="relative h-full w-[min(54vw,760px)] max-w-[760px]"
          style={{
            y: sy,
            filter: "drop-shadow(0 18px 35px rgba(0,0,0,0.12))",
            transformOrigin: "bottom center",
          }}
        >
          <motion.img
            src={profile}
            alt="Dharamveer Sahu"
            className="h-full w-full object-cover object-bottom"
            style={{
              filter: useTransform(
                blurPx,
                (v) => `blur(${v}px) saturate(1.05)`,
              ),
              objectPosition: "center bottom",
              transform: "scale(1.12)",
            }}
            draggable="false"
          />
          <motion.div
            className="absolute inset-0 bg-[#0b0d10]"
            style={{ opacity: darkOpacity }}
          />
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════
          LAYER 20 — FRONT LETTERS  M V E E R
          these are IN FRONT of the photo
      ══════════════════════════════════════════ */}
      <div
        className="pointer-events-none select-none absolute inset-x-0 top-0 z-20
                      flex items-start overflow-hidden"
        style={{ height: "65%", paddingTop: "clamp(16px,4vh,48px)" }}
      >
        <div className="flex w-full">
          {/* spacer matching BACK letters space */}
          <div className="flex-[5]" />
          {FRONT.map((l, i) => (
            <motion.span
              key={`front-${i}`}
              variants={lv((BACK.length + i) * 0.055)}
              initial="hidden"
              animate={loaded ? "show" : "hidden"}
              className={letterBase}
              style={letterSize}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          LAYER 30 — NAVBAR  (horizontal, like heynesh)
      ══════════════════════════════════════════ */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.4, ease }}
        className="absolute inset-x-0 z-30 flex items-center justify-between px-10 xl:px-16"
        style={{ top: "50.5%" }}
      >
        {/* Left nav links */}
        <div
          className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.18em]
                        text-[#172019] dark:text-white"
        >
          <a
            href="#home"
            className="hover:text-green-600 dark:hover:text-lime-400 transition"
          >
            Home
          </a>
          <span className="opacity-20">|</span>
          <a
            href="#about"
            className="hover:text-green-600 dark:hover:text-lime-400 transition"
          >
            About Me
          </a>
          <span className="opacity-20">|</span>
          <Link
            to="/projects"
            className="hover:text-green-600 dark:hover:text-lime-400 transition"
          >
            Projects
          </Link>
        </div>

        {/* Right nav links */}
        <div
          className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.18em]
                        text-[#172019] dark:text-white"
        >
          <a
            href="https://github.com/dharamveersahu18"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600 dark:hover:text-lime-400 transition flex items-center gap-1.5"
          >
            <FaGithub size={14} /> GitHub
          </a>
          <span className="opacity-20">|</span>
          <a
            href="https://www.linkedin.com/in/dharamveer-sahu/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600 dark:hover:text-lime-400 transition flex items-center gap-1.5"
          >
            <FaLinkedin size={14} /> LinkedIn
          </a>
          <span className="opacity-20">|</span>
          <Link
            to="/contact"
            className="hover:text-green-600 dark:hover:text-lime-400 transition"
          >
            Contact
          </Link>
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════════
          LAYER 30 — BOTTOM 3-COLUMN ROW
          [left stats]  [center headline+CTA]  [right traits+desc]
      ══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.55, ease }}
        className="absolute inset-x-0 bottom-0 z-30 grid grid-cols-3 gap-6 px-10 xl:px-16 pb-8"
        style={{ top: "60.5%" }}
      >
        {/* ── LEFT COL: tagline + stat cards ── */}
        <div className="flex flex-col justify-between">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]
                        text-gray-500 dark:text-gray-400 leading-6"
          >
            The Full-Stack Developer.
            <br />
            That's Dharamveer.
          </p>

          <div className="flex flex-col gap-3 mt-auto pt-4">
            {/* stat 1 */}
            <div
              className="w-fit rounded-2xl border border-gray-200 bg-white/80 px-5 py-3
                            shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#181a1f]/90
                            transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="text-green-600 dark:text-lime-400 text-2xl font-black leading-none">
                  ✦
                </span>
                <div>
                  <p className="text-xl font-black leading-none">10+</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500 mt-0.5">
                    Projects Built
                  </p>
                </div>
              </div>
            </div>
            {/* stat 2 */}
            <div
              className="w-fit rounded-2xl border border-gray-200 bg-white/80 px-5 py-3
                            shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#181a1f]/90
                            transition duration-300 hover:-translate-y-1"
            >
              <p className="text-xl font-black leading-none text-green-600 dark:text-lime-400">
                2+
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500 mt-0.5">
                Years of Learning
              </p>
            </div>
          </div>
        </div>

        {/* ── CENTER COL: headline + CTA ── */}
        <div className="flex flex-col justify-end gap-5">
          <div>
            <h2 className="text-4xl xl:text-5xl font-black leading-tight tracking-tight">
              Full-Stack,
              <br />
              <WordFlipper />
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-full
                         bg-gradient-to-r from-lime-400 to-green-500 px-6 py-2.5
                         font-bold text-black text-sm shadow-lg shadow-lime-500/20
                         transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Projects
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full
                         border border-gray-300 px-6 py-2.5 font-bold text-sm text-gray-700
                         transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-600
                         dark:border-white/10 dark:text-gray-300 dark:hover:border-lime-400 dark:hover:text-lime-400"
            >
              Let's Connect
              <Mail size={14} />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COL: trait list + description ── */}
        <div className="flex flex-col justify-between">
          {/* traits */}
          <div className="flex flex-col gap-1.5">
            {[
              { icon: "✦", label: "Creative" },
              { icon: "⬡", label: "Reliable" },
              { icon: "◈", label: "Strategist" },
              { icon: "▸", label: "Builder" },
              { icon: "✕", label: "Efficient" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm font-semibold
                           text-gray-600 dark:text-gray-300"
              >
                <span className="text-green-600 dark:text-lime-400 text-xs w-4 text-center shrink-0">
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>

          {/* description */}
          <p className="text-xs leading-6 text-gray-500 dark:text-gray-400 max-w-[260px] mt-4">
            Building full-stack applications that merge creativity, technical
            excellence and real-time performance.
          </p>

          {/* resume link */}
          <a
            href="Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-3 w-fit flex items-center gap-2 text-xs font-bold uppercase
                       tracking-[0.15em] text-green-600 dark:text-lime-400
                       hover:underline transition"
          >
            <FaFileLines size={12} /> View Resume
          </a>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30
                      flex flex-col items-center gap-1.5 text-[9px] font-semibold
                      uppercase tracking-[0.3em] text-gray-400"
      >
        <span className="animate-bounce text-lime-400">↓</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MOBILE HERO  (< lg)
════════════════════════════════════════════════════════════ */
function MobileHero({ loaded }) {
  const ease = [0.76, 0, 0.24, 1];
  return (
    <div
      className="relative z-10 px-5 pb-20 pt-24 lg:hidden
                    bg-[#f4f7f0] dark:bg-[#0b0d10] text-[#172019] dark:text-white min-h-screen"
    >
      <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full
                     border border-lime-500/30 bg-lime-500/5 px-4 py-2
                     text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-lime-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
          </span>
          Open to Internships &amp; Projects
        </motion.div>

        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.88, filter: "blur(20px)" }}
          animate={loaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.1, ease }}
        >
          <div className="absolute inset-[-20px] rounded-full bg-lime-400/10 blur-3xl" />
          <div
            className="relative h-[220px] w-[220px] overflow-hidden rounded-full
                          border-2 border-lime-400 sm:h-[260px] sm:w-[260px]"
          >
            <img
              src={profile}
              alt="Dharamveer Sahu"
              className="h-full w-full object-cover object-[center_15%]"
            />
          </div>
          <div
            className="absolute -bottom-3 -left-3 rounded-2xl border border-gray-200
                          bg-white/80 px-4 py-2.5 text-left shadow-xl backdrop-blur-md
                          dark:border-white/10 dark:bg-[#181a1f]/90"
          >
            <p className="text-base font-black">10+</p>
            <p className="text-[9px] uppercase tracking-wider text-gray-500">
              Projects
            </p>
          </div>
          <div
            className="absolute -right-4 top-4 rounded-2xl border border-gray-200
                          bg-white/80 px-4 py-2.5 text-left shadow-xl backdrop-blur-md
                          dark:border-white/10 dark:bg-[#181a1f]/90"
          >
            <p className="text-[9px] uppercase tracking-wider text-gray-500">
              Currently
            </p>
            <p className="mt-0.5 text-xs font-bold">WebSockets · RAG</p>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.25, ease }}
          className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl"
        >
          Full-Stack
          <br />
          <span className="text-green-600 dark:text-lime-400">Developer</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.33, ease }}
          className="mt-6 text-2xl font-bold leading-tight sm:text-3xl"
        >
          Building <WordFlipper />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.42, ease }}
          className="mt-5 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-400"
        >
          React · Node.js · MongoDB — real-time systems &amp; AI-powered
          applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.52, ease }}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/projects"
            className="group flex items-center gap-2 rounded-full
                       bg-gradient-to-r from-lime-400 to-green-500 px-6 py-3
                       font-bold text-black shadow-lg transition duration-300
                       hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Projects
            <ArrowUpRight
              size={17}
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-full border border-gray-300
                       px-6 py-3 font-bold text-gray-700 transition duration-300
                       hover:-translate-y-1 hover:border-green-500 hover:text-green-600
                       dark:border-white/10 dark:text-gray-300 dark:hover:border-lime-400 dark:hover:text-lime-400"
          >
            Let's Connect <Mail size={16} />
          </Link>
        </motion.div>

        <div className="flex mt-6 items-center gap-3">
          <a
            href="Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 items-center gap-2 rounded-full border border-white/10
                       bg-white/[0.03] px-4 text-sm font-medium text-gray-300
                       hover:border-lime-400/40 hover:text-lime-300 transition"
          >
            <FaFileLines size={13} /> Resume
          </a>
          <a
            href="https://github.com/dharamveersahu18"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10
                       bg-white/[0.03] text-gray-400 hover:border-lime-400/40 hover:text-lime-300 transition"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/dharamveer-sahu/"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10
                       bg-white/[0.03] text-gray-400 hover:border-lime-400/40 hover:text-lime-300 transition"
          >
            <FaLinkedin size={17} />
          </a>
        </div>

        <div
          className="mt-10 flex flex-col items-center gap-1.5 text-[10px] font-semibold
                        uppercase tracking-[0.25em] text-gray-400"
        >
          <span>Scroll to explore</span>
          <span className="animate-bounce text-lime-400">↓</span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   ROOT
════════════════════════════════════════════════════════════ */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home">
      <MobileHero loaded={loaded} />
      <DesktopHero loaded={loaded} />
    </section>
  );
}

export default Hero;
