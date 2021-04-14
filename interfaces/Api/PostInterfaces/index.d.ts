import { IPostModel } from "@Models/index";
import { IMetaData } from "@Interfaces/index";
export interface IGetPostsResponse {
	posts: IPostModel[];
	meta: IMetaData;
}
export interface IGetPostResponse {
	post: IPostModel;
}
export interface IPostUpdatePostResponse {
	post: IPostModel;
	message: string;
}
export interface IPostUpdatePostRequest {
	post_id: number;
	title?: string;
	collection?: string;
	privacy?: string;
	content?: string;
	tag?: string;
}
