import "./css/projects.css"
import ProjectView from "./components/Project"
import TechInfo from "./components/TechInfo";
function Projects()
{
    return(
        <div className="projects">
            <div className="header">
            <h1>Projects</h1>
                <p>Websites, Web, Mobile, Desktop applications, Libraries and Frameworks</p>
            </div>

            <div className="project-items">
                <ProjectView />
                <TechInfo />
            </div>

        </div>
    )
}
export default Projects;
