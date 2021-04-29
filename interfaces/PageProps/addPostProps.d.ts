import {
	IPostUploadPostRequest,
	IPostUploadPostResponse,
} from "@Interfaces/Api";
import { IPostModel } from "@Interfaces/Models";

export interface IAddPostProps {
	uploadPost: (
		payload: IPostUploadPostRequest
	) => Promise<void | IPostUploadPostResponse>;
	setPage: (page) => void;
}
export interface IAddPostState {
	post: IPostModel;
	loading: boolean;
}
