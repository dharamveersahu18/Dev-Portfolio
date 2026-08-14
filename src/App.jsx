import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectsDetails";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/about" element={<About />} />

      {/* Contact */}
      <Route path="/contact" element={<Contact />} />

      {/* Project Details */}
      <Route
        path="/projects"
        element={<ProjectDetails />}
      />

    </Routes>
  );
}

export default App;