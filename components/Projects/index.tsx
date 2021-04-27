import React from "react";
import { Project } from "@Components/index";
import { connect } from "react-redux";
import { getProjects } from "@Actions/index";
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
			totalPages: 1,
		};
		if (typeof window == "undefined") return;
		window.onscroll = debounce(() => {
			if (
				Math.ceil(window.innerHeight + window.scrollY) >=
				document.body.offsetHeight
			) {
				this.fetchProjects();
			}
		}, 100);
	}

	fetchProjects() {
		if (this.state.page == this.state.totalPages) return;
		const { getProjects, userId } = this.props;
		let projectsPromise;
		if (userId) {
			projectsPromise = getProjects(this.state.page + 1, this.PER_PAGE, userId);
		} else {
			projectsPromise = getProjects(this.state.page + 1, this.PER_PAGE);
		}
		this.setState({ page: this.state.page + 1 });
		projectsPromise.then((response) => {
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
		const { userId } = this.props;
		return (
			<div className="d-flex flex-column align-items-center">
				{this.state.projects.map((project) => {
					return <Project key={project.id} project={project} userId={userId} />;
				})}
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getProjects: (page, perPage, userId = null) => {
			return dispatch(getProjects(page, perPage, userId));
		},
	};
};
export const Projects = connect(null, mapDispatchToProps)(ProjectsComponent);
