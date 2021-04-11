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
	const { changeHandler } = props;
	return (
		<select
			className="form-control text-capitalize w-25"
			onChange={changeHandler}
			defaultValue="DEFAULT_OPTION"
		>
			<option value="DEFAULT_OPTION" disabled>
				Select Collection
			</option>
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
