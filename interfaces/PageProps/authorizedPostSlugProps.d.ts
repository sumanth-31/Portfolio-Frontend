import {
	IGetPostResponse,
	IPostUpdatePostRequest,
	IPostUpdatePostResponse,
	IDeletePostRequest,
} from "@Interfaces/Api";
import { IPostModel } from "@Interfaces/Models";

export interface IAuthorizedPostSlugProps {
	getPost: (parameters) => Promise<void | IGetPostResponse>;
	updatePost: (
		payload: IPostUpdatePostRequest
	) => Promise<void | IPostUpdatePostResponse>;
	setPage: (page) => void;
	deletePost: (payload: IDeletePostRequest) => Promise<void>;
}
export interface IAuthorizedPostSlugState {
	post?: IPostModel;
	showConfirm?: boolean;
}
