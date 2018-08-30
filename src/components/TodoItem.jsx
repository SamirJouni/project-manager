import React from "react";

const TodoItem = props => {
	const {title} = props.todo;

	return (
		<li>
			<strong>{title}</strong>
		</li>
	);
};

export default TodoItem;
