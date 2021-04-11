import { IGetCollectionsResponse } from "@Interfaces/Api";
import React from "react";

export interface ICollectionsDropdownProps {
	fetchCollections: Promise<void | IGetCollectionsResponse>;
	changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}