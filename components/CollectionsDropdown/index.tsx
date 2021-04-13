import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ICollectionModel, ICollectionsDropdownProps } from "@Interfaces/index";
import { getCollections } from "@Actions/index";
const CollectionsDropDownDisconnected = (props: ICollectionsDropdownProps) => {
	const [collections, setCollections] = useState<ICollectionModel[]>([]);
	useEffect(() => {
		const { fetchCollections } = props;
		fetchCollections.then((response) => {
			if (!response) return;
			setCollections(response.collections);
		});
	});
	const { changeHandler, value } = props;
	return (
		<select
			className="form-control text-capitalize "
			onChange={changeHandler}
			value={value}
		>
			<option value="DEFAULT_OPTION">All Collections</option>
			{collections.map((collection) => {
				return (
					<option
						key={collection.id}
						value={collection.id}
						className="text-capitalize"
					>
						{collection.name}
					</option>
				);
			})}
		</select>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCollections: dispatch(getCollections()),
	};
};

export const CollectionsDropDown = connect(
	null,
	mapDispatchToProps
)(CollectionsDropDownDisconnected);
