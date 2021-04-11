import React from "react";
import { connect } from "react-redux";
import { IMyPostsProps } from "@Interfaces/index";
import { Body, CollectionsDropDown, TagsDropDown } from "@Components/index";
const MyPosts = (props: IMyPostsProps) => {
	const collectionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
	};
	const tagsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
	};
	return (
		<Body style="p-4 bg-white">
			<div className="d-flex justify-content-between">
				<CollectionsDropDown changeHandler={collectionHandler} />
				<TagsDropDown changeHandler={tagsHandler} />
			</div>
		</Body>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(null, mapDispatchToProps)(MyPosts);
