import { IGetCollectionsResponse } from "@Interfaces/Api";
import { ICollectionModel } from "@Interfaces/Models";
import React from "react";

export interface ICollectionsDropdownProps {
	fetchCollections: (parameters) => Promise<void | IGetCollectionsResponse>;
	value: string;
	changeHandler: (collection: ICollectionModel) => void;
	userId?: string | string[];
}
