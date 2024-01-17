import { useLocation } from "react-router-dom";
import ProjectHeroSection from "../components/ProjectHeroSection";
import ProjectHighlights from "../components/ProjectHighlights";
import ProjectBuild from "../components/ProjectBuild";

function ProjectDetails() {
  let { state } = useLocation();
  
  window.scrollTo(0,0)
  
  return (
    <>
      <ProjectHeroSection name={state.name} date={state.date} img={state.img} tumbnail={state.tumbnail} description={state.description} links={state.links}/>
      <ProjectHighlights gallery={state.gallery}/>
      <ProjectBuild colors={state.colors} tech={state.tech}/>
    </>
  );
}

export default ProjectDetails;
