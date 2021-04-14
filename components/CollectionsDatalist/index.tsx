import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ICollectionModel, ICollectionsDatalistProps } from "@Interfaces/index";
import { getCollections } from "@Actions/index";
const CollectionsDatalistComponent = (props: ICollectionsDatalistProps) => {
	const [collections, setCollections] = useState<ICollectionModel[]>([]);
	useEffect(() => {
		getCollectionsData("");
	}, []);
	function getCollectionsData(query) {
		const { fetchCollections } = props;
		const parameters = {
			search_query: query,
		};
		fetchCollections(parameters).then((response) => {
			if (!response) return;
			setCollections(response.collections);
		});
	}
	const { changeHandler, value } = props;
	return (
		<div className="w-100 form-group">
			<h4 className="text-center mb-4">Collection</h4>
			<input
				onChange={changeHandler}
				value={value}
				placeholder="Select Collection"
				required
				list="collections-list"
				name="collection"
				className="form-control mb-5"
			/>
			<datalist id="collections-list">
				{collections.map((collection) => {
					return (
						<option key={collection.id} value={collection.name}>
							{collection.name}
						</option>
					);
				})}
			</datalist>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCollections: (parameters) => {
			return dispatch(getCollections(parameters));
		},
	};
};

export const CollectionsDatalist = connect(
	null,
	mapDispatchToProps
)(CollectionsDatalistComponent);
