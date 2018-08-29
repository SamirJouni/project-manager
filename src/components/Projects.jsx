import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = props => {
	let projectItems;

	if (props.projects) {
		projectItems = props.projects.map((project, i) => (
			<ProjectItem key={i} project={project} />
		));
	}

	return (
		<div>
			{projectItems}
		</div>
	);
};

export default Projects;
