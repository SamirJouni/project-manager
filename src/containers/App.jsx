import React, { Component } from "react";
import Projects from "../components/Projects";
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

	render() {
		return (
			<React.Fragment>
				<Projects projects={this.state.projects} />
			</React.Fragment>
		);
	}
}

export default App;
