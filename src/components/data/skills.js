import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAppwrite,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiLangchain,
  SiFastapi,
  SiHuggingface,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const skillCategories = [
  "All",
  "Frontend",
  "Backend & DB",
  "AI / ML",
  "Languages & Tools",
];

export const skills = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
    level: "Proficient",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: "Proficient",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    color: "#3178C6",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: "Proficient",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    level: "Intermediate",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: SiHtml5,
    color: "#E34F26",
    level: "Advanced",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: SiCss,
    color: "#1572B6",
    level: "Advanced",
  },

  // Backend & Database
  {
    name: "Node.js",
    category: "Backend & DB",
    icon: SiNodedotjs,
    color: "#5FA04E",
    level: "Intermediate",
  },
  {
    name: "Express.js",
    category: "Backend & DB",
    icon: SiExpress,
    color: "#A8B9C0",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    category: "Backend & DB",
    icon: SiMongodb,
    color: "#47A248",
    level: "Intermediate",
  },
  {
    name: "Appwrite",
    category: "Backend & DB",
    icon: SiAppwrite,
    color: "#FD366E",
    level: "Proficient",
  },
  {
    name: "PostgreSQL",
    category: "Backend & DB",
    icon: SiPostgresql,
    color: "#4169E1",
    level: "Learning",
  },

  // AI & ML
  {
    name: "Python",
    category: "AI / ML",
    icon: SiPython,
    color: "#3776AB",
    level: "Intermediate",
  },
  {
    name: "LangChain",
    category: "AI / ML",
    icon: SiLangchain,
    color: "#2DD4BF",
    level: "Exploring",
  },
  {
    name: "PyTorch",
    category: "AI / ML",
    icon: SiPytorch,
    color: "#EE4C2C",
    level: "Exploring",
  },
  {
    name: "Hugging Face",
    category: "AI / ML",
    icon: SiHuggingface,
    color: "#FFD21E",
    level: "Exploring",
  },
  {
    name: "FastAPI",
    category: "AI / ML",
    icon: SiFastapi,
    color: "#009688",
    level: "Learning",
  },

  // Languages & Tools
  {
    name: "C++",
    category: "Languages & Tools",
    icon: SiCplusplus,
    color: "#00599C",
    level: "Core",
  },
  {
    name: "Java",
    category: "Languages & Tools",
    icon: FaJava,
    color: "#ED8B00",
    level: "Core",
  },
  {
    name: "Git",
    category: "Languages & Tools",
    icon: SiGit,
    color: "#F05032",
    level: "Proficient",
  },
  {
    name: "GitHub",
    category: "Languages & Tools",
    icon: SiGithub,
    color: "#A3E635",
    level: "Proficient",
  },
  {
    name: "Docker",
    category: "Languages & Tools",
    icon: SiDocker,
    color: "#2496ED",
    level: "Learning",
  },
  {
    name: "Postman",
    category: "Languages & Tools",
    icon: SiPostman,
    color: "#FF6C37",
    level: "Intermediate",
  },
  {
    name: "Linux",
    category: "Languages & Tools",
    icon: SiLinux,
    color: "#FCC624",
    level: "Intermediate",
  },
];

export default skills;