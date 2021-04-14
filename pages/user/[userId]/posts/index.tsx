import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import {
	ICollectionModel,
	IMyPostsProps,
	IPostsProps,
	ITagModel,
} from "@Interfaces/index";
import {
	Body,
	CollectionsDropDown,
	TagsDropDown,
	Posts,
} from "@Components/index";
interface PostsPropsType {
	searchQuery: string;
	collection?: number;
	tag?: number;
	userId?: string | string[];
}
const PostsPage = (props: IMyPostsProps) => {
	const router = useRouter();
	const { userId } = router.query;
	const [collection, setCollection] = useState<ICollectionModel>(null);
	const [tag, setTag] = useState<ITagModel>();
	const [searchKeyword, setSearchKeyword] = useState("");
	const [postsProps, setPostsProps] = useState<PostsPropsType>({
		searchQuery: "",
		userId: userId,
	});
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const newProps: PostsPropsType = {
			searchQuery: searchKeyword,
		};
		if (collection) newProps["collection"] = collection.id;
		if (tag) newProps["tag"] = tag.id;
		if (userId) newProps["userId"] = userId;
		setPostsProps(newProps);
	};
	const collectionHandler = (collection: ICollectionModel) => {
		setCollection(collection);
	};
	const tagsHandler = (tag: ITagModel) => {
		setTag(tag);
	};
	return (
		<Body style="p-4 bg-white">
			<h3 className="text-center mb-5">Search Criteria</h3>
			<form
				className="d-flex flex-column align-items-center"
				onSubmit={submitHandler}
			>
				<div className="row w-100">
					<div className="col-sm">
						<CollectionsDropDown
							changeHandler={collectionHandler}
							value={collection ? collection.name : "All Collections"}
							userId={userId}
						/>
					</div>

					<div className="col-sm">
						<TagsDropDown
							changeHandler={tagsHandler}
							value={tag ? tag.name : "All Tags"}
							userId={userId}
						/>
					</div>

					<div className="col-sm">
						<input
							className="form-control mb-3"
							placeholder="Search Post Title"
							onChange={(e) => {
								setSearchKeyword(e.target.value);
							}}
							value={searchKeyword}
						/>
					</div>
				</div>
				<button className="btn btn-primary mb-3" type="submit">
					Filter Posts
				</button>
			</form>
			<Posts
				{...postsProps}
				key={`coll=${postsProps["collection"]} tag=${postsProps["tag"]} sq=${postsProps["searchQuery"]}`}
			/>
		</Body>
	);
};
PostsPage.getInitialProps = (ctx) => {
	return {
		something: 1,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(null, mapDispatchToProps)(PostsPage);
