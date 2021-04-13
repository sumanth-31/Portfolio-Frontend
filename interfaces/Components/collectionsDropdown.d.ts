import { IGetCollectionsResponse } from "@Interfaces/Api";
import React from "react";

export interface ICollectionsDropdownProps {
	fetchCollections: Promise<void | IGetCollectionsResponse>;
	value: string;
	changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
