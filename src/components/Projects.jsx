import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = props => {
	let projectItems;

	if (props.projects) {
		projectItems = props.projects.map((project, i) => (
			<ProjectItem key={i} project={project} onDelete={props.onDelete} />
		));
	}

	return (
		<div>
			<h2>PROJECTS</h2>
			{projectItems}
		</div>
	);
};

export default Projects;
