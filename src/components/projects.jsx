import { projects } from "../constants/projects";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl text-center md:text-left font-bold mb-2">
        Recent Projects
      </h1>

      <ul className="bg-white text-left rounded-xl p-4">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              name={project.name}
              description={project.description}
              url={project.url}
              imgUrl={project.imgUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
