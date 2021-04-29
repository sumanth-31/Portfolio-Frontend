import { IPostModel, IGetPostsResponse } from "@Interfaces/index";
import { IUserModel } from "@Interfaces/Models";
export interface IPostsProps {
	collection?: number;
	tag?: number;
	searchQuery: string;
	getPosts: (parameters) => Promise<void | IGetPostsResponse>;
	user?: IUserModel;
}
export interface IPostsState {
	posts: IPostModel[];
	page: number;
	totalPages: number;
	loading: boolean;
}
