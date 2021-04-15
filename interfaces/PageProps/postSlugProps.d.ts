import { IGetPostResponse } from "@Interfaces/Api";
import { IPostModel } from "@Interfaces/Models";

export interface IPostSlugProps {
	getPost: (parameters) => Promise<void | IGetPostResponse>;
}
export interface IPostSlugState {
	post?: IPostModel;
}
