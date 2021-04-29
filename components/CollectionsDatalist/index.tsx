import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ICollectionModel, ICollectionsDatalistProps } from "@Interfaces/index";
import { getCollections } from "@Actions/index";
import { Loading } from "@Components/Loading";
const CollectionsDatalistComponent = (props: ICollectionsDatalistProps) => {
	const [collections, setCollections] = useState<ICollectionModel[]>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getCollectionsData("");
	}, []);
	function getCollectionsData(query) {
		const { fetchCollections } = props;
		const parameters = {
			search_query: query,
		};
		setLoading(true);
		fetchCollections(parameters).then((response) => {
			if (!response) return;
			setLoading(false);
			setCollections(response.collections);
		});
	}
	const { changeHandler, value } = props;
	const loadingMessage = "Loading collections...";
	return (
		<div className="w-100 form-group">
			<Loading message={loadingMessage} show={loading} />
			<h4 className="text-center mb-4">Collection</h4>
			<input
				onChange={changeHandler}
				value={value}
				placeholder="Select Collection"
				required
				list="collections-list"
				name="collection"
				className="form-control mb-5"
				maxLength={20}
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
