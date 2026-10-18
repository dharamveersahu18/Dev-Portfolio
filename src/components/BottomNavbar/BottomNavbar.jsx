import {
  Home,
  FolderKanban,
  Mail,
} from "lucide-react";

import { Link } from "react-router-dom";


function BottomNavbar() {
  const navItems = [
    { name: "Home", icon: <Home size={20} />, href: "/" },
    { name: "Projects", icon: <FolderKanban size={20} />, href: "/projects" },
    { name: "Contact", icon: <Mail size={20} />, href: "/contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-gray-700 bg-[#111111] px-3 py-2 shadow-2xl">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          title={item.name}
          className="flex h-11 w-11 items-center justify-center rounded-full text-gray-400 transition-all hover:bg-white hover:text-black"
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  );
}

export default BottomNavbar;