import BottomNavbar from "../components/BottomNavbar/BottomNavbar";

import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Hero from "../components/hero/Hero"
import Intro from "../components/intro/Intro";
import ProjectDetails from "./ProjectsDetails";
import Projects from "../components/projects/Projects";
import { useState } from "react";


function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <Intro onComplete={() => setShowIntro(false)} />
      )}

      <BottomNavbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;