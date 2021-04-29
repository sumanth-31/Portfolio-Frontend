import React from "react";
import { Body, ImageCard, Loading } from "@Components/index";
import { NextPageContext } from "next";
import Router from "next/router";
import { getProject } from "@Actions/index";
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
		if (!project) {
			return <Loading message="Loading Project..." show />;
		}
		return (
			<Body style="p-4 bg-white d-flex flex-column justify-content-center align-items-center">
				<div className="w-75 text-break text-justify d-flex flex-column justify-content-between align-items-center">
					<h1 className="mb-5  text-capitalize">{project.name}</h1>
					<h4 className="mb-4 text-capitalize mt-5">Project Image</h4>
					<div className="project-image mx-auto mb-5">
						<ImageCard
							image={project.image ? project.image : imagePaths.DEFAULT_PROJECT}
						/>
					</div>
					<h4 className="mb-4 text-capitalize">Project Description</h4>
					<p className="mb-5">{project.description}</p>
					<h4 className="mb-4 text-capitalize ">Link To Project</h4>
					<a
						className="mb-5 d-block text-break"
						title={project.link}
						href={project.link}
					>
						{project.link}
					</a>
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
