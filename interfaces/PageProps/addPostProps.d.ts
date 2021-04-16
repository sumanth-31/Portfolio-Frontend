import {
	IPostUploadPostRequest,
	IPostUploadPostResponse,
} from "@Interfaces/Api";
import { IPostModel } from "@Interfaces/Models";

export interface IAddPostProps {
	uploadPost: (
		payload: IPostUploadPostRequest
	) => Promise<void | IPostUploadPostResponse>;
}
export interface IAddPostState {
	post?: IPostModel;
}
