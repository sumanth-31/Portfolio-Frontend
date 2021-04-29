import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ITagModel, ITagsDatalistProps } from "@Interfaces/index";
import { getTags } from "@Actions/index";
import { Loading } from "@Components/Loading";
const TagsDatalistComponent = (props: ITagsDatalistProps) => {
	const [tags, setTags] = useState<ITagModel[]>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getTagsData("");
	}, []);
	function getTagsData(query) {
		const { fetchTags } = props;
		const parameters = {
			search_query: query,
		};
		setLoading(true);
		fetchTags(parameters).then((response) => {
			if (!response) return;
			setLoading(false);
			setTags(response.tags);
		});
	}
	const { changeHandler, value } = props;
	const loadingMessage = "Loading tags...";
	return (
		<div className="w-100 form-group">
			<Loading message={loadingMessage} show={loading} />
			<h4 className="text-center mb-4">Tag</h4>
			<input
				onChange={changeHandler}
				value={value}
				placeholder="Select Tag"
				required
				list="tags-list"
				name="tag"
				className="form-control mb-5"
				maxLength={20}
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
