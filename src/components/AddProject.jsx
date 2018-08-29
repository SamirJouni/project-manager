import React from "react";

const AddProject = props => {
	const { onSubmitHandler } = props;

	const defaultProps = {
		categories: ["Web Design", "Web Development", "Mobile Development"]
	};

	const categoryOptions = defaultProps.categories.map((category, i) => (
		<option key={i} value={category}>
			{category}
		</option>
	));

	let title;
	let category = defaultProps.categories[0];

	return (
		<div>
			<h3>Add Project</h3>
			<form
				onSubmit={event => {
					if (title) {
						onSubmitHandler(event, title, category);
					}
				}}
			>
				<div>
					<label>Title</label>
					<br />
					<input type="text" onChange={event => (title = event.target.value)} />
				</div>
				<div>
					<label>Category</label>
					<br />
					<select onChange={event => (category = event.target.value)}>
						{categoryOptions}
					</select>
				</div>
				<input type="submit" value="submit" />
			</form>
		</div>
	);
};

export default AddProject;
