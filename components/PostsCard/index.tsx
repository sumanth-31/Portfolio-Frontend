import React from "react";
import { imagePaths, PAGE_URLS } from "@Constants/index";
import { IPostsCardProps } from "@Interfaces/index";
import Link from "next/link";
import "./style.scss";
export const PostsCard = (props: IPostsCardProps) => {
	const { user, authenticated } = props;
	let postsUrl = PAGE_URLS.myPostsPage;
	let queryParams = {};
	if (!authenticated) {
		postsUrl = PAGE_URLS.postsPage;
		queryParams = { userSlug: user.id };
	}
	const postsText = `${user.name}'s Posts`;
	return (
		<div className="bg-white shadow-lg rounded d-flex align-items-center p-4">
			<img src={imagePaths.POST} className="post-icon" />
			<span className="text-truncate text-capitalize ml-4" title={postsText}>
				<Link href={{ pathname: postsUrl, query: queryParams }}>
					{postsText}
				</Link>
			</span>
		</div>
	);
};
