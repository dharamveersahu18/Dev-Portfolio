import BottomNavbar from "./components/BottomNavbar/BottomNavbar"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import { useState } from "react";
import Intro from "./components/intro/Intro";
function App() {
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

export default App;
