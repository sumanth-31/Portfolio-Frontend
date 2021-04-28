import React from "react";
import { Body, ImageCard } from "@Components/index";
import { uploadProject } from "@Actions/index";
import { setPageAction } from "@ActionCreators/index";
import { IAddProjectProps, IAddProjectState } from "@Interfaces/index";
import { connect } from "react-redux";
import { imagePaths, PAGE_URLS } from "@Constants/index";
import Router from "next/router";
import "./style.scss";
class Project extends React.Component<IAddProjectProps, IAddProjectState> {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			link: "",
			image: null,
			description: "",
		};
	}
	componentDidMount() {
		const { setPage } = this.props;
		setPage("other");
	}
	changeDetails = (e, element: string) => {
		this.setState((prevState) => {
			const newState = {
				...prevState,
			};
			switch (element) {
				case "name":
					newState["name"] = e.target.value;
					break;
				case "description":
					newState["description"] = e.target.value;
					break;
				case "link":
					newState["link"] = e.target.value;
					break;
				case "image":
					newState["image"] = URL.createObjectURL(e.target.files[0]);
					break;
			}
			return newState;
		});
	};
	saveDetails = async (e: React.FormEvent) => {
		e.preventDefault();
		const { addProject } = this.props;
		const { name, link, description, image } = this.state;
		if (!name || !link || !description) return;
		const formData = new FormData();
		formData.append("name", name);
		formData.append("description", description);
		formData.append("link", link);
		if (image) {
			const imageBlob = await fetch(image).then((response) => {
				return response.blob();
			});
			formData.append("image", imageBlob);
		}
		addProject(formData).then((response) => {
			if (!response) return;
			alert("Project Added Successfully!");
			Router.push(PAGE_URLS.homePage);
		});
	};
	render() {
		const { name, link, description, image } = this.state;
		return (
			<Body
				style="p-4 bg-white d-flex flex-column justify-content-center align-items-center"
				authenticated
			>
				<form
					className="w-75 mx-auto d-flex flex-column align-items-center"
					onSubmit={(e) => {
						this.saveDetails(e);
					}}
				>
					<h4 className="mb-4 text-center text-capitalize">Project Name</h4>
					<div className="form-group w-100 mb-5">
						<textarea
							value={name}
							className="form-control"
							onChange={(e) => {
								this.changeDetails(e, "name");
							}}
							required
							maxLength={100}
						/>
					</div>
					<h4 className="mb-4 text-capitalize text-center">Project Image</h4>
					<div className="project-image w-75 mx-auto mb-5">
						<ImageCard image={image ? image : imagePaths.DEFAULT_PROJECT}>
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
							value={description}
							className="form-control"
							onChange={(e) => {
								this.changeDetails(e, "description");
							}}
							required
						/>
					</div>
					<h4 className="mb-4 text-capitalize text-center">Link To Project</h4>
					<div className="form-group w-100 mb-5">
						<textarea
							value={link}
							className="form-control"
							onChange={(e) => {
								this.changeDetails(e, "link");
							}}
							required
							maxLength={200}
						/>
					</div>
					<button className="btn btn-primary" type="submit">
						Save Changes
					</button>
				</form>
			</Body>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addProject: (formData) => {
			return dispatch(uploadProject(formData));
		},
		setPage: (page) => {
			dispatch(setPageAction(page));
		},
	};
};
export default connect(null, mapDispatchToProps)(Project);
