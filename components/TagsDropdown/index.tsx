import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ITagModel, ITagsDropdownProps } from "@Interfaces/index";
import { getTags } from "@Actions/index";
const TagsDropDownComponent = (props: ITagsDropdownProps) => {
	const [tags, setTags] = useState<ITagModel[]>([]);
	useEffect(() => {
		const { fetchTags } = props;
		fetchTags.then((response) => {
			if (!response) return;
			setTags(response.tags);
		});
	});
	const { changeHandler, value } = props;
	return (
		<select
			className="form-control text-capitalize col-sm"
			onChange={changeHandler}
			value={value}
		>
			<option value="DEFAULT_OPTION" disabled>
				Select Tag
			</option>
			{tags.map((tag) => {
				return (
					<option key={tag.id} value={tag.id} className="text-capitalize">
						{tag.name}
					</option>
				);
			})}
		</select>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTags: dispatch(getTags()),
	};
};

export const TagsDropDown = connect(
	null,
	mapDispatchToProps
)(TagsDropDownComponent);
