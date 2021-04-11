import React from "react";
import { connect } from "react-redux";
import { IMyPostsProps } from "@Interfaces/index";
import { Body, CollectionsDropDown } from "@Components/index";
const MyPosts = (props: IMyPostsProps) => {
	const collectionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
	};
	return (
		<Body style="p-4 bg-white">
			<CollectionsDropDown changeHandler={collectionHandler} />
		</Body>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(null, mapDispatchToProps)(MyPosts);
