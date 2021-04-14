import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ITagModel, ITagsDatalistProps } from "@Interfaces/index";
import { getTags } from "@Actions/index";
const TagsDatalistComponent = (props: ITagsDatalistProps) => {
	const [tags, setTags] = useState<ITagModel[]>([]);
	useEffect(() => {
		getTagsData("");
	}, []);
	function getTagsData(query) {
		const { fetchTags } = props;
		const parameters = {
			search_query: query,
		};
		fetchTags(parameters).then((response) => {
			if (!response) return;
			setTags(response.tags);
		});
	}
	const { changeHandler, value } = props;
	return (
		<div className="w-100 form-group">
			<h4 className="text-center mb-4">Tag</h4>
			<input
				onChange={changeHandler}
				value={value}
				placeholder="Select Tag"
				required
				list="tags-list"
				name="tag"
				className="form-control mb-5"
			/>
			<datalist id="tags-list">
				{tags.map((tag) => {
					return (
						<option key={tag.id} value={tag.name}>
							{tag.name}
						</option>
					);
				})}
			</datalist>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTags: (parameters) => {
			return dispatch(getTags(parameters));
		},
	};
};

export const TagsDatalist = connect(
	null,
	mapDispatchToProps
)(TagsDatalistComponent);
