import React from "react";
import TodoItem from "./TodoItem";

const Todos = props => {
	let todoItems;

	if (props.todos) {
		todoItems = props.todos.map((todo, i) => <TodoItem key={i} todo={todo} />);
	}

	return (
		<div>
			<h2>TODOS</h2>
			{todoItems}
		</div>
	);
};

export default Todos;
