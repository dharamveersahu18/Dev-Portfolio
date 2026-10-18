import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectsDetails";
import LoadingIntro from "./components/intro/Intro";
import { useTheme } from "./components/hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [showIntro, setShowIntro] = useState(
    () => localStorage.getItem("introShown") !== "true"
  );

  const handleIntroComplete = () => {
    localStorage.setItem("introShown", "true");
    setShowIntro(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} onToggleTheme={toggleTheme} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectDetails />} />
      </Routes>

      {showIntro && (
        <LoadingIntro onComplete={handleIntroComplete} />
      )}
    </>
  );
}

export default App;