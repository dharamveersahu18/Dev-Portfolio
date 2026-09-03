import { motion } from "motion/react";
import { Asterisk } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiAppwrite,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiLangchain,
  SiPytorch,
  SiGit,
  SiDocker,
  SiPostman,
  SiCplusplus,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const STACK_GROUPS = [
  {
    category: "FRONTEND",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#A8B9C0" },
      { name: "Appwrite", icon: SiAppwrite, color: "#FD366E" },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "LangChain", icon: SiLangchain, color: "#2DD4BF" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    ],
  },
  {
    category: "TOOLS & CORE",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

// Atmospheric star dots matching the reference screenshot
const STARS = [
  { top: "10%", left: "15%", size: "2px", opacity: 0.35 },
  { top: "22%", left: "75%", size: "1.5px", opacity: 0.25 },
  { top: "38%", left: "42%", size: "2px", opacity: 0.4 },
  { top: "54%", left: "12%", size: "1px", opacity: 0.3 },
  { top: "68%", left: "88%", size: "2px", opacity: 0.35 },
  { top: "82%", left: "30%", size: "1.5px", opacity: 0.3 },
  { top: "92%", left: "65%", size: "2px", opacity: 0.45 },
  { top: "15%", left: "92%", size: "1px", opacity: 0.25 },
];

function MyStack() {
  return (
    <section
      id="stack"
      className="
        relative min-h-screen overflow-hidden
        bg-[#f4f7f0] py-24 text-[#172019]
        transition-colors duration-500
        sm:py-32
        dark:bg-[#0b0d10] dark:text-white
      "
    >
      {/* Background Starry Dust Particles */}
      <div className="pointer-events-none absolute inset-0">
        {STARS.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-black/40 dark:bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Vertical Email on the Left Margin (inspired by reference) */}
      <div
        className="
          pointer-events-none absolute left-3 top-1/2 hidden
          -translate-y-1/2 -rotate-90 origin-left
          text-[11px] font-mono uppercase tracking-[0.25em]
          text-gray-400 opacity-60
          xl:block dark:text-gray-500
        "
      >
        dharamveersahu18@gmail.com
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-3 sm:mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="text-green-600 dark:text-lime-400"
          >
            <Asterisk size={28} strokeWidth={2.5} />
          </motion.div>

          <h2
            className="
              text-sm font-bold uppercase tracking-[0.25em]
              text-gray-900 sm:text-base
              dark:text-white
            "
          >
            MY STACK
          </h2>
        </motion.div>

        {/* Stack Groups List */}
        <div className="flex flex-col gap-14 sm:gap-18">
          {STACK_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: groupIdx * 0.08 }}
              className="
                grid grid-cols-1 gap-6
                border-b border-gray-200/70 pb-12
                md:grid-cols-[240px_1fr] md:gap-12 md:pb-14
                lg:grid-cols-[280px_1fr]
                dark:border-white/[0.07]
              "
            >
              {/* Category Title on the Left */}
              <div>
                <h3
                  className="
                    text-3xl font-black uppercase tracking-tight
                    text-gray-400/80 transition-colors duration-300
                    hover:text-green-600 sm:text-4xl
                    dark:text-white/40 dark:hover:text-lime-400
                  "
                >
                  {group.category}
                </h3>
              </div>

              {/* Items Grid on the Right */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-7">
                {group.items.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="group flex cursor-pointer items-center gap-3"
                    >
                      {/* Brand Icon with subtle glowing halo on hover */}
                      <div className="relative flex items-center justify-center">
                        <div
                          className="
                            absolute -inset-1 rounded-full opacity-0 blur-md
                            transition-opacity duration-300 group-hover:opacity-40
                          "
                          style={{ backgroundColor: tech.color }}
                        />

                        <Icon
                          size={24}
                          className="
                            relative z-10 transition-transform duration-300
                            group-hover:scale-110
                          "
                          style={{ color: tech.color }}
                        />
                      </div>

                      {/* Tech Name */}
                      <span
                        className="
                          text-sm font-semibold tracking-tight text-gray-800
                          transition-colors duration-300
                          group-hover:text-green-600
                          sm:text-base
                          dark:text-gray-200 dark:group-hover:text-white
                        "
                      >
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyStack;
