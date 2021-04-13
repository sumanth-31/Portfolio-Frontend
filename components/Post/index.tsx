import React from "react";
import { IPostProps } from "@Interfaces/index";
import { imagePaths } from "@Constants/index";
import "./style.scss";
export const Post = (props: IPostProps) => {
	const { post } = props;
	return (
		<div className="col-sm col-xl-3 col-md-4 col-lg-3 mb-5">
			<div className="card hover-cursor shadow">
				<h5 className="card-header text-capitalize">{post.fields.title}</h5>
				<div className="card-body">
					<p className="multiline-truncate">{post.fields.content}</p>
				</div>
				<div className="card-footer">
					<div className="badge badge-primary badge-pill">
						<div className="d-flex align-items-center">
							<img src={imagePaths.PRIVACY} className="privacy-icon" />
							<p className="mb-0 text-capitalize ml-2">{post.fields.privacy}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
