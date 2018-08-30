import React, { Component } from "react";
import Projects from "../components/Projects";
import AddProject from "../components/AddProject";
import uuid from "uuid";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			defaultProps: {
				categories: []
			},
			todos: []
		};
	}

	getProjects = () => {
		this.setState({
			projects: [
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
			]
		});
	};
	getDefaultProps = () => {
		this.setState({
			defaultProps: {
				categories: ["Web Design", "Web Development", "Mobile Development"]
			}
		});
	};
	getTodos = () => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then(response => response.json())
			.then(todos => this.setState({ todos }))
			.catch(console.log);
	};

	componentWillMount() {
		this.getProjects();
		this.getDefaultProps();
		this.getTodos();
	}

	componentDidMount() {
		this.getProjects();
		this.getDefaultProps();
		this.getTodos();
	}

	handleSubmit = (title, category) => {
		const projects = [...this.state.projects];
		projects.push({ id: uuid.v4(), title: title, category: category });
		this.setState({ projects });
	};

	handleDelete = id => {
		const projects = this.state.projects.filter(p => p.id !== id);
		this.setState({ projects });
	};

	render() {
		return (
			<React.Fragment>
				<h2>Projects</h2>
				<AddProject
					defaultProps={this.state.defaultProps}
					onSubmitHandler={this.handleSubmit}
				/>
				<Projects projects={this.state.projects} onDelete={this.handleDelete} />
			</React.Fragment>
		);
	}
}

export default App;
