import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ICollectionModel, ICollectionsDropdownProps } from "@Interfaces/index";
import { getCollections } from "@Actions/index";
import "./style.scss";
const CollectionsDropDownDisconnected = (props: ICollectionsDropdownProps) => {
	const [collections, setCollections] = useState<ICollectionModel[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	useEffect(() => {
		getCollectionsData("");
	}, []);
	function getCollectionsData(query) {
		const { fetchCollections, userId } = props;
		const parameters = {
			search_query: query,
		};
		if (userId) parameters["user_id"] = userId;
		fetchCollections(parameters).then((response) => {
			if (!response) return;
			setCollections(response.collections);
		});
	}
	function queryHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchQuery(e.target.value);
		getCollectionsData(e.target.value);
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
					placeholder="Search Collections"
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
						All Collections
					</button>
					{collections.map((collection) => {
						return (
							<button
								className="list-group-item text-capitalize"
								onClick={(e) => {
									changeHandler(collection);
								}}
								key={collection.id}
								type="button"
							>
								{collection.name}
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
		fetchCollections: (parameters) => {
			return dispatch(getCollections(parameters));
		},
	};
};

export const CollectionsDropDown = connect(
	null,
	mapDispatchToProps
)(CollectionsDropDownDisconnected);
