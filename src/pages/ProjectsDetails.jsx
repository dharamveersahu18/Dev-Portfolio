import BottomNavbar from "../components/BottomNavbar/BottomNavbar";
import Projects from "../components/projects/Projects";
import BottomCTA from "../components/BOTTOMCTA/BottomCTA";
function ProjectDetails() {
  return (
    <>
      <BottomNavbar />

      <main>
        <Projects />
        <BottomCTA />
      </main>
    </>
  );
}

export default ProjectDetails;
