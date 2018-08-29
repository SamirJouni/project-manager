import React from "react";

const ProjectItem = props => {
	const { title, category } = props.project;

	return (
		<li>
			<strong>{title}</strong> - {category}
		</li>
	);
};

export default ProjectItem;
