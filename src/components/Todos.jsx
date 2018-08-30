import React from "react";
import TodoItem from "./TodoItem";

const Todos = props => {
	let todoItems;

	if (props.todos) {
		todoItems = props.todos.map((todo, i) => (
			<TodoItem key={i} todo={todo}/>
		));
	}

	return (
		<div>
			{todoItems}
		</div>
	);
};


export default Todos;
