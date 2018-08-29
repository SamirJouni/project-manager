import React, { Component } from "react";
import Projects from "../components/Projects";
import AddProject from "../components/AddProject";
import uuid from "uuid";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		};
	}

	componentWillMount() {
		const projects = [
			{
				id: uuid.v4(),
				title: "business website",
				category: "web design"
			},
			{
				id: uuid.v4(),
				title: "social app",
				category: "mobile development"
			},
			{
				id: uuid.v4(),
				title: "shopping cart",
				category: "web development"
			}
		];
		this.setState({ projects });
	}

	handleSubmit = (title, category) => {
		const projects = [...this.state.projects];
		projects.push({ id: uuid.v4(), title: title, category: category });
		this.setState({ projects });
	};

	handleDelete = (id) => {
		const projects = this.state.projects.filter(p => p.id !== id);
		this.setState({projects});
	}

	render() {
		return (
			<React.Fragment>
				<h2>Projects</h2>
				<AddProject onSubmitHandler={this.handleSubmit} />
				<Projects projects={this.state.projects} onDelete={this.handleDelete}/>
			</React.Fragment>
		);
	}
}

export default App;
