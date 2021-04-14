import { IGetTagsResponse } from "@Interfaces/Api";
import { ITagModel } from "@Models/index";
import React from "react";
export interface ITagsDropdownProps {
	fetchTags: (parameters) => Promise<void | IGetTagsResponse>;
	value: string;
	changeHandler: (tag: ITagModel) => void;
	userId?: string | string[];
}
