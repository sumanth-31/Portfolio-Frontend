import { IGetTagsResponse } from "@Interfaces/Api";
import { ITagModel } from "@Models/index";
import React from "react";
export interface ITagsDatalistProps {
	fetchTags: (parameters) => Promise<void | IGetTagsResponse>;
	value: string;
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
