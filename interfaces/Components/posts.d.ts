import { IPostModel, IGetPostsResponse } from "@Interfaces/index";
export interface IPostsProps {
	collection?: number;
	tag?: number;
	searchQuery: string;
	getPosts: (parameters) => Promise<void | IGetPostsResponse>;
	userId?: string | string[];
}
export interface IPostsState {
	posts: IPostModel[];
	page: number;
	totalPages: number;
}
