import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              name={project.name}
              about={project.about}
              technologies={project.technologies}
            />
          )
        })}
        {/* {projects.map(project => <ProjectItem key={project.id} project={project} />)} */}
      </div>
    </div>
  );
}

export default ProjectList;
