import karyaDashboard from "../../assets/images/karya-dashboard.jpg";
import nexusPostImage from "../../assets/images/nexuspost.png";

const projects = [
  {
    number: "01",
    title: "Karya — Team Collaboration",
    category: "Full-Stack Web Application",
    image: karyaDashboard,
    description:
      "A team productivity platform for managing projects, assigning tasks, tracking progress, and collaborating through a centralized dashboard.",
    highlights: [
      "Implemented authentication and protected routes for secure user access.",
      "Built project and task management workflows using React, Node.js, Express, and MongoDB.",
      "Developed dashboard, comments, and notification features.",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/dharamveersahu18/Karya",
    liveDemo: "",
  },
  {
    number: "02",
    title: "NexusPost — Blogging Platform",
    category: "Full-Stack Web Application",
    image: nexusPostImage,
    description:
      "A modern blogging platform for creating, publishing, and managing posts with a responsive interface and user authentication.",
    highlights: [
      "Built a responsive user interface using React and Tailwind CSS.",
      "Integrated Appwrite for backend services and content management.",
      "Used Redux Toolkit for centralized application state management.",
    ],
    tags: ["React", "Tailwind CSS", "Appwrite", "Redux Toolkit", "JavaScript"],
    github: "https://github.com/dharamveersahu18/Blog",
    liveDemo: "https://nexuspost.web.app/",
  },
];

export default projects;
