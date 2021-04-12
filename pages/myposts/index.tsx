import React, { useState } from "react";
import { connect } from "react-redux";
import { IMyPostsProps, IPostsProps } from "@Interfaces/index";
import {
	Body,
	CollectionsDropDown,
	TagsDropDown,
	Posts,
} from "@Components/index";
interface PostsPropsType {
	searchQuery: string;
	collection?: string;
	tag?: string;
}
const MyPosts = (props: IMyPostsProps) => {
	const [collection, setCollection] = useState("DEFAULT_OPTION");
	const [tag, setTag] = useState("DEFAULT_OPTION");
	const [searchKeyword, setSearchKeyword] = useState("");
	const [postsProps, setPostsProps] = useState<PostsPropsType>({
		searchQuery: "",
	});
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const newProps = {
			searchQuery: searchKeyword,
		};
		if (collection !== "DEFAULT_OPTION") newProps["collection"] = collection;
		if (tag !== "DEFAULT_OPTION") newProps["tag"] = tag;
		setPostsProps(newProps);
	};
	const collectionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCollection(e.target.value);
	};
	const tagsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTag(e.target.value);
	};
	return (
		<Body style="p-4 bg-white">
			<form className="row" onSubmit={submitHandler}>
				<CollectionsDropDown
					changeHandler={collectionHandler}
					value={collection}
				/>
				<TagsDropDown changeHandler={tagsHandler} value={tag} />
				<input
					className="form-control col-sm"
					placeholder="Search Post"
					onChange={(e) => {
						setSearchKeyword(e.target.value);
					}}
					value={searchKeyword}
				/>
				<button className="btn btn-primary" type="submit">
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

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(null, mapDispatchToProps)(MyPosts);
