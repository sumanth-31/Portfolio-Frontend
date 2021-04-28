import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ITagModel, ITagsDropdownProps } from "@Interfaces/index";
import { getTags } from "@Actions/index";
const TagsDropDownComponent = (props: ITagsDropdownProps) => {
	const [tags, setTags] = useState<ITagModel[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	useEffect(() => {
		getTagsData("");
	}, []);
	function getTagsData(query) {
		const { fetchTags, userId } = props;
		const parameters = {
			search_query: query,
		};
		if (userId) parameters["user_id"] = userId;
		fetchTags(parameters).then((response) => {
			if (!response) return;
			setTags(response.tags);
		});
	}
	function queryHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchQuery(e.target.value);
		getTagsData(e.target.value);
	}
	const { changeHandler, value } = props;
	return (
		<div className="dropdown mb-3">
			<button
				className="btn btn-outline-primary dropdown-toggle text-capitalize w-100"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
			>
				{value}
			</button>
			<div
				className="dropdown-menu dropdown-menu-container w-100"
				aria-labelledby="dropdownMenuButton"
			>
				<input
					placeholder="Search Tags"
					className="form-control"
					onChange={queryHandler}
					value={searchQuery}
				/>
				<ul className="list-group list-group-flush text-break">
					<button
						className="list-group-item"
						onClick={(e) => {
							changeHandler(null);
						}}
						type="button"
					>
						All Tags
					</button>
					{tags.map((tag) => {
						return (
							<button
								className="list-group-item text-capitalize"
								onClick={(e) => {
									changeHandler(tag);
								}}
								key={tag.id}
								type="button"
							>
								{tag.name}
							</button>
						);
					})}
				</ul>
			</div>
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

export const TagsDropDown = connect(
	null,
	mapDispatchToProps
)(TagsDropDownComponent);
