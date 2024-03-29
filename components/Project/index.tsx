import React from "react";
import { IProjectModel } from "@Models/index";
import { imagePaths } from "@Constants/index";
import { IProjectProps } from "@Interfaces/index";
import { PAGE_URLS } from "@Constants/index";
import Link from "next/link";
import "./style.scss";
export const Project = (props: IProjectProps) => {
	const { project, userId } = props;
	const redirecUrl = userId
		? PAGE_URLS.projectSlugPage
		: PAGE_URLS.myProjectSlugPage;
	const queryParams = { projectSlug: project.id };
	if (userId) {
		queryParams["userId"] = userId;
	}
	return (
		<div className="w-75 d-flex align-items-center p-4 shadow mb-5 rounded-lg">
			<img
				src={project.image ? project.image : imagePaths.DEFAULT_PROJECT}
				className="project-icon"
			/>
			<Link href={{ pathname: redirecUrl, query: queryParams }}>
				<h4 className="text-capitalize text-truncate ml-4 anchor-style">
					{project.name}
				</h4>
			</Link>
		</div>
	);
};
