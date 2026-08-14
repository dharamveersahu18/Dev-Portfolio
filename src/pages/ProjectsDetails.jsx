import BottomNavbar from "../components/BottomNavbar/BottomNavbar";
import { useParams } from "react-router-dom";
import Projects from "../components/projects/Projects";
import ProjectCard from "../components/projects/ProjectCard";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <>
      <BottomNavbar />

      <main>
        <Projects />
      </main>
    </>
  );
}

export default ProjectDetails;
