import React from "react";

const ProjectItem = props => {
	const { id, title, category } = props.project;

	return (
		<li>
			<strong>{title}</strong> - {category}{" "}
			<span onClick={() => props.onDelete(id)}>X</span>
		</li>
	);
};

export default ProjectItem;
