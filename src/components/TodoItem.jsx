import React from "react";

const TodoItem = props => {
	return (
		<li>
			<strong>{props.todo.title}</strong>
		</li>
	);
};

export default TodoItem;
