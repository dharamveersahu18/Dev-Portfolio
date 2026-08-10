import { useState } from "react";
import {
  Home,
  FolderKanban,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";

function BottomNavbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    {
      name: "Home",
      icon: <Home size={20} />,
      href: "#home",
    },
    {
      name: "Projects",
      icon: <FolderKanban size={20} />,
      href: "#projects",
    },
    {
      name: "Contact",
      icon: <Mail size={20} />,
      href: "#contact",
    },
  ];

  return (
    <nav
      className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2
        z-50

        flex
        items-center
        gap-2

        rounded-full
        border
        border-gray-700

        bg-[#111111]
        px-3
        py-2

        shadow-2xl
      "
    >
      {/* Home / Projects / Contact */}
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          title={item.name}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full

            text-gray-400

            transition-all
            duration-200

            hover:bg-white
            hover:text-black
          "
        >
          {item.icon}
        </a>
      ))}

      {/* Divider */}
      <div className="mx-1 h-7 w-px bg-gray-700" />

      {/* GitHub */}
      <a
        href="https://github.com/dharamveersahu18"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full

          text-gray-400
          transition-all

          hover:bg-white
          hover:text-black
        "
      >
        <FaGithub size={20} />
      </a>

      {/* Theme */}
      <button
        onClick={toggleTheme}
        title="Toggle theme"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full

          border
          border-gray-600

          text-gray-300

          transition-all

          hover:bg-white
          hover:text-black
        "
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}

export default BottomNavbar;