import React from "react";
import { Body, ImageCard } from "@Components/index";
import { NextPageContext } from "next";
import Router from "next/router";
import {
	getOwnProject,
	uploadProjectImage,
	updateProject,
} from "@Actions/index";
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
	changeDetails = (e, element: string) => {
		this.setState((prevState) => {
			const newProject = {
				...prevState.project,
			};
			switch (element) {
				case "name":
					newProject["name"] = e.target.value;
					break;
				case "description":
					newProject["description"] = e.target.value;
					break;
				case "link":
					newProject["link"] = e.target.value;
					break;
				case "image":
					newProject["image"] = URL.createObjectURL(e.target.files[0]);
					break;
			}
			return {
				project: newProject,
			};
		});
	};
	saveDetails = async (e: React.FormEvent) => {
		e.preventDefault();
		const { updateProjectDetails } = this.props;
		const { project } = this.state;
		if (!project) return;
		const formData = new FormData();
		formData.append("project_id", project.id.toString());
		formData.append("name", project.name);
		formData.append("description", project.description);
		formData.append("link", project.link);
		if (project.image) {
			const image = await fetch(project.image).then((response) => {
				return response.blob();
			});
			formData.append("image", image);
			console.log(image);
		}
		updateProjectDetails(formData).then((response) => {
			if (!response) return;
			this.setState({ project: response.project });
			alert("Project Details Successfully Updated!");
		});
	};
	render() {
		const { project } = this.state;
		if (!project) return null;
		return (
			<Body style="p-4 bg-white d-flex flex-column justify-content-center align-items-center">
				<div className="w-75">
					<form
						className="w-75 mx-auto d-flex flex-column align-items-center"
						onSubmit={(e) => {
							this.saveDetails(e);
						}}
					>
						<h4 className="mb-4 text-center text-capitalize">Project Name</h4>
						<div className="form-group w-100 mb-5">
							<textarea
								value={project.name}
								className="form-control"
								onChange={(e) => {
									this.changeDetails(e, "name");
								}}
							/>
						</div>
						<h4 className="mb-4 text-capitalize text-center">Project Image</h4>
						<div className="project-image w-75 mx-auto mb-5">
							<ImageCard
								image={
									project.image ? project.image : imagePaths.DEFAULT_PROJECT
								}
							>
								<div className="custom-file">
									<input
										className="custom-file-input"
										type="file"
										accept="image/*"
										onChange={(e) => {
											this.changeDetails(e, "image");
										}}
									/>
									<label className="custom-file-label">Choose Picture</label>
								</div>
							</ImageCard>
						</div>
						<h4 className="mb-4 text-center text-capitalize">
							Project Description
						</h4>
						<div className="form-group w-100 mb-5">
							<textarea
								value={project.description}
								className="form-control"
								onChange={(e) => {
									this.changeDetails(e, "description");
								}}
							/>
						</div>
						<h4 className="mb-4 text-capitalize text-center">
							Link To Project
						</h4>
						<div className="form-group w-100 mb-5">
							<textarea
								value={project.link}
								className="form-control"
								onChange={(e) => {
									this.changeDetails(e, "link");
								}}
							/>
						</div>
						<button className="btn btn-primary" type="submit">
							Save Changes
						</button>
					</form>
				</div>
			</Body>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		uploadImage: (projectId, file) => {
			return dispatch(uploadProjectImage(projectId, file));
		},
		getProject: (projectId) => {
			return dispatch(getOwnProject(projectId));
		},
		updateProjectDetails: (formData) => {
			return dispatch(updateProject(formData));
		},
	};
};
export default connect(null, mapDispatchToProps)(Project);
