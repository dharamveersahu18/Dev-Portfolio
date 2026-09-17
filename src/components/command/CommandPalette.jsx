import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Home,
  User,
  Cpu,
  FolderGit2,
  Mail,
  Download,
  Copy,
  Sun,
  Moon,
  Check,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";

function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  // Listen for Ctrl+K / Cmd+K and custom trigger event
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dharamveersahu18@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  const handleDownloadResume = () => {
    window.location.href =
      "mailto:dharamveersahu18@gmail.com?subject=Resume%20Request%20-%20Dharamveer%20Sahu";
    setIsOpen(false);
  };

  const COMMANDS = [
    {
      id: "home",
      title: "Home",
      category: "Navigation",
      icon: Home,
      action: () => scrollToSection("home"),
    },
    {
      id: "about",
      title: "About & Education",
      category: "Navigation",
      icon: User,
      action: () => scrollToSection("about"),
    },
    {
      id: "stack",
      title: "Tech Stack",
      category: "Navigation",
      icon: Cpu,
      action: () => scrollToSection("stack"),
    },
    {
      id: "projects",
      title: "Projects",
      category: "Navigation",
      icon: FolderGit2,
      action: () => scrollToSection("projects"),
    },
    {
      id: "contact",
      title: "Contact Me",
      category: "Navigation",
      icon: Mail,
      action: () => scrollToSection("contact"),
    },
    {
      id: "resume",
      title: "Download Resume / CV",
      category: "Actions",
      icon: Download,
      action: handleDownloadResume,
    },
    {
      id: "copy-email",
      title: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
      category: "Actions",
      icon: copied ? Check : Copy,
      action: handleCopyEmail,
    },
    {
      id: "theme",
      title: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
      category: "Preferences",
      icon: isDark ? Sun : Moon,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside menu
  const handleInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-20 sm:pt-28">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Palette Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              relative z-10 w-full max-w-xl overflow-hidden rounded-2xl
              border border-gray-200 bg-white shadow-2xl
              dark:border-slate-800 dark:bg-[#11151b]
            "
          >
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-500 dark:border-slate-800/80 dark:bg-[#0c0f13] dark:text-slate-400">
              <div className="flex items-center gap-2 font-mono">
                <Terminal size={14} className="text-green-600 dark:text-lime-400" />
                <span>dharamveer@portfolio:~$</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-gray-700 dark:bg-slate-800 dark:text-slate-300">
                  ESC
                </kbd>
                <span>to close</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3 dark:border-slate-800">
              <Search size={18} className="text-gray-400 dark:text-slate-500" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Type a command or search section..."
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>

            {/* Commands List */}
            <div className="max-h-72 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="p-6 text-center text-xs text-gray-500 dark:text-slate-500">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`
                        flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold
                        transition-all duration-150
                        ${
                          isSelected
                            ? "bg-green-500/10 text-green-700 dark:bg-lime-400/10 dark:text-lime-400"
                            : "text-gray-700 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            flex h-7 w-7 items-center justify-center rounded-lg
                            ${
                              isSelected
                                ? "bg-green-500 text-slate-950 dark:bg-lime-400"
                                : "bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400"
                            }
                          `}
                        >
                          <Icon size={14} />
                        </div>
                        <span>{cmd.title}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400 dark:text-slate-500 font-normal">
                          {cmd.category}
                        </span>
                        {isSelected && (
                          <ArrowRight size={13} className="text-green-600 dark:text-lime-400" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Bar */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-2 text-[10px] text-gray-500 dark:border-slate-800 dark:bg-[#0c0f13] dark:text-slate-500">
              <div className="flex items-center gap-2">
                <span>Navigate</span>
                <kbd className="rounded bg-gray-200 px-1 py-0.5 font-mono text-gray-600 dark:bg-slate-800 dark:text-slate-400">
                  ↑
                </kbd>
                <kbd className="rounded bg-gray-200 px-1 py-0.5 font-mono text-gray-600 dark:bg-slate-800 dark:text-slate-400">
                  ↓
                </kbd>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Select</span>
                <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-gray-600 dark:bg-slate-800 dark:text-slate-400">
                  ↵
                </kbd>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;
