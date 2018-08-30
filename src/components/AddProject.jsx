import React from "react";

const AddProject = props => {
	const { defaultProps, onSubmitHandler } = props;

	const categoryOptions = defaultProps.categories.map((category, i) => (
		<option key={i} value={category}>
			{category}
		</option>
	));

	let title;
	let category = defaultProps.categories[0];

	return (
		<div>
			<h2>ADD PROJECT</h2>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (title.value) {
						onSubmitHandler(title.value, category.value);
						title.value = "";
						category.value = defaultProps.categories[0];
					} else {
						alert("Title Is Required !");
					}
				}}
			>
				<div style={{marginBottom:'.8rem', marginTop:'1.3rem'}}>
					<label>Title</label>
					<br />
					<input type="text" ref={el => (title = el)} />
				</div>
				<div>
					<label>Category</label>
					<br />
					<select ref={el => (category = el)}>{categoryOptions}</select>
				</div>
				<br />
				<input type="submit" value="submit" />
			</form>
			<br />
		</div>
	);
};

export default AddProject;
