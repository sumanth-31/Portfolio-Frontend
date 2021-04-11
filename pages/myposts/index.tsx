import React, { useState } from "react";
import { connect } from "react-redux";
import { IMyPostsProps } from "@Interfaces/index";
import { Body, CollectionsDropDown, TagsDropDown } from "@Components/index";
const MyPosts = (props: IMyPostsProps) => {
	const [collection, setCollection] = useState<number | string>(
		"DEFAULT_OPTION"
	);
	const [tag, setTag] = useState<number | string>("DEFAULT_OPTION");
	const [searchKeyword, setSearchKeyword] = useState("");
	const collectionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCollection(e.target.value);
	};
	const tagsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTag(e.target.value);
	};
	return (
		<Body style="p-4 bg-white">
			<form className="row">
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
				<button className="btn btn-primary col-sm">Filter Posts</button>
			</form>
		</Body>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(null, mapDispatchToProps)(MyPosts);
