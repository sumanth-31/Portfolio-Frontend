import React from "react";
import { Body, ImageCard } from "@Components/index";
import { NextPageContext } from "next";
import Router from "next/router";
import { getProject, updateProject } from "@Actions/index";
import { IProjectSlugProps, IProjectSlugState } from "@Interfaces/index";
import { imagePaths } from "@Constants/index";
import { connect } from "react-redux";
import "./style.scss";
class Project extends React.Component<IProjectSlugProps, IProjectSlugState> {
	static async getInitialProps(ctx: NextPageContext) {
		//Including this method is necessary to get dynamic routing, else router.query won't work on first render
		return {
			something: 1,
		};
	}
	componentDidMount() {
		const { projectId } = Router.query;
		const { getProject } = this.props;
		getProject(projectId).then((response) => {
			if (!response) return;
			this.setState({ project: response.project });
		});
	}
	constructor(props) {
		super(props);
		this.state = {
			project: null,
		};
	}
	render() {
		const { project } = this.state;
		if (!project) return null;
		return (
			<Body style="p-4 bg-white d-flex flex-column justify-content-center align-items-center">
				<div className="w-75">
					<h1 className="mb-5 text-center text-capitalize">{project.name}</h1>
					<h4 className="mb-4 text-capitalize text-center mt-5">
						Project Image
					</h4>
					<div className="project-image w-75 mx-auto mb-5">
						<ImageCard
							image={project.image ? project.image : imagePaths.DEFAULT_PROJECT}
						/>
					</div>
					<h4 className="mb-4 text-center text-capitalize">
						Project Description
					</h4>
					<p className="mb-5 text-center">{project.description}</p>
					<h4 className="mb-4 text-capitalize text-center">Link To Project</h4>
					<p className="mb-5 text-center anchor-style">{project.link}</p>
				</div>
			</Body>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getProject: (projectId) => {
			return dispatch(getProject(projectId));
		},
	};
};
export default connect(null, mapDispatchToProps)(Project);