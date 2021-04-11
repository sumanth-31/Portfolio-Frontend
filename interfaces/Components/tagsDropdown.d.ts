import { IGetTagsResponse } from "@Interfaces/Api";
import { ITagModel } from "@Models/index";
import React from "react";
export interface ITagsDropdownProps {
	fetchTags: Promise<void | IGetTagsResponse>;
	value: number | string;
	changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
