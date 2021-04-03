import React from "react";
import { IProjectModel } from "@Models/index";
import { imagePaths } from "@Constants/index";
import { IProjectProps } from "@Interfaces/index";
import "./style.scss";
export const Project = (props: IProjectProps) => {
	const { project } = props;
	return (
		<div className="w-75 d-flex align-items-center p-4 shadow mb-5 rounded-lg">
			<img
				src={project.image ? project.image : imagePaths.DEFAULT_PROJECT}
				className="project-icon"
			/>
			<a className="text-capitalize text-truncate ml-4">{project.name}</a>
		</div>
	);
};
