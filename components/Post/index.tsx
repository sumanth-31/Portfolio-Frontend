import React from "react";
import { IPostProps } from "@Interfaces/index";
import { imagePaths } from "@Constants/index";
import { PAGE_URLS } from "@Constants/index";
import Link from "next/link";
import "./style.scss";
export const Post = (props: IPostProps) => {
	const { post, user } = props;
	let pathName = PAGE_URLS.myPostSlugPage;
	let query = { postSlug: post.id };
	if (user) {
		pathName = PAGE_URLS.postSlugPage;
		query["userSlug"] = user.id;
	}
	return (
		<div className="col-sm col-xl-3 col-md-6 col-lg-4 mb-5">
			<Link
				href={{
					pathname: pathName,
					query: query,
				}}
			>
				<div className="card hover-cursor shadow">
					<h5 className="card-header text-capitalize font-weight-bold">
						{post.title}
					</h5>
					<div className="card-body">
						<p className="multiline-truncate">{post.content}</p>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<div className="badge badge-info badge-pill min-width-0">
							<div className="d-flex align-items-center">
								<img src={imagePaths.PRIVACY} className="footer-icon" />
								<p className="mb-0 text-capitalize ml-2 text-truncate">
									{post.privacy}
								</p>
							</div>
						</div>
						<div className="badge badge-info badge-pill min-width-0">
							<div className="d-flex align-items-center">
								<img src={imagePaths.COLLECTION} className="footer-icon" />
								<p className="mb-0 text-capitalize ml-2 text-truncate">
									{post.collection}
								</p>
							</div>
						</div>
						<div className="badge badge-info badge-pill min-width-0">
							<div className="d-flex align-items-center">
								<img src={imagePaths.TAG} className="footer-icon" />
								<p className="mb-0 text-capitalize ml-2 text-truncate">
									{post.tag}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
