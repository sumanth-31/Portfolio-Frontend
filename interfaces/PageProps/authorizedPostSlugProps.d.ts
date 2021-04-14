import {
	IGetPostResponse,
	IPostUpdatePostRequest,
	IPostUpdatePostResponse,
} from "@Interfaces/Api";
import { IPostModel } from "@Interfaces/Models";

export interface IAuthorizedPostSlugProps {
	getPost: (parameters) => Promise<void | IGetPostResponse>;
	updatePost: (
		payload: IPostUpdatePostRequest
	) => Promise<void | IPostUpdatePostResponse>;
}
export interface IAuthorizedPostSlugState {
	post?: IPostModel;
}
