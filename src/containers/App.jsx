import React, { Component } from "react";
import Projects from "../components/Projects";
import AddProject from "../components/AddProject";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
		};
	}

	componentWillMount () {
		const projects = [
			{
				title: "business website",
				category: "web design"
			},
			{
				title: "social app",
				category: "mobile development"
			},
			{
				title: "shopping cart",
				category: "web development"
			}
		];
		this.setState({projects});
	}

	handleSubmit = (title, category) => {
		const projects = [...this.state.projects];
		projects.push({title: title, category: category},);
		this.setState({projects});
	}

	render() {
		return (
			<React.Fragment>
				<h2>Projects</h2>
				<AddProject onSubmitHandler={this.handleSubmit}/>
				<Projects projects={this.state.projects} />
			</React.Fragment>
		);
	}
}

export default App;
