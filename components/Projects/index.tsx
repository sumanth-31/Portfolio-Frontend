import React from "react";
import { Project } from "@Components/index";
import { connect } from "react-redux";
import { getOwnProjects } from "@Actions/index";
import { IProjectsProps, IProjectsState } from "@Interfaces/Components";
import debounce from "lodash.debounce";
class ProjectsComponent extends React.Component<
	IProjectsProps,
	IProjectsState
> {
	PER_PAGE = 10;

	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			page: 0,
			totalPages: 100,
		};
		if (typeof window == "undefined") return;
		window.onscroll = debounce(() => {
			console.log(
				window.innerHeight,
				document.documentElement.scrollTop,
				document.documentElement.offsetHeight
			);
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				console.log("triggered!");
				this.fetchProjects();
			}
		}, 100);
	}

	fetchProjects() {
		if (this.state.page == this.state.totalPages) return;
		getOwnProjects(this.state.page + 1, this.PER_PAGE).then((response) => {
			if (!response) return;
			this.setState((prevState) => {
				return {
					projects: [...prevState.projects, ...response.projects],
					page: response.meta.curr_page,
					totalPages: response.meta.pages_count,
				};
			});
		});
	}
	componentDidMount() {
		this.fetchProjects();
	}
	render() {
		return (
			<div className="d-flex flex-column align-items-center">
				{this.state.projects.map((project) => {
					return <Project key={project.id} project={project} />;
				})}
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {};
};
export const Projects = connect(null, mapDispatchToProps)(ProjectsComponent);
