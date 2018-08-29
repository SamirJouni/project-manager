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
				onSubmit={e => {
					e.preventDefault();
					if (title) {
						onSubmitHandler(title, category);
					} else {
						alert('Title Is Required !');
					}
				}}
			>
				<div>
					<label>Title</label>
					<br />
					<input type="text" onChange={e => (title = e.target.value)} />
				</div>
				<div>
					<label>Category</label>
					<br />
					<select onChange={e => (category = e.target.value)}>
						{categoryOptions}
					</select>
				</div>
				<input type="submit" value="submit" />
			</form>
		</div>
	);
};

export default AddProject;
