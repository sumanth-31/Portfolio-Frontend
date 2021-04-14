import { IGetCollectionsResponse } from "@Interfaces/Api";
import { ICollectionModel } from "@Interfaces/Models";
import React from "react";

export interface ICollectionsDatalistProps {
	fetchCollections: (parameters) => Promise<void | IGetCollectionsResponse>;
	value: string;
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
