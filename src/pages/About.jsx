import BottomNavbar from "../components/BottomNavbar/BottomNavbar";
import About from "../components/about/About";
import BottomCTA from "../components/BOTTOMCTA/BottomCTA";
function AboutPage() {
  return (
    <>
      <BottomNavbar />

      <main>
        <About />
      </main>
        <BottomCTA />
    </>
  );
}

export default AboutPage;