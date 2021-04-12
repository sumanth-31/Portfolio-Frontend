import { IPostModel, IGetPostsResponse } from "@Interfaces/index";
export interface IPostsProps {
	collection?: string;
	tag?: string;
	searchQuery: string;
	getPosts: (parameters) => Promise<void | IGetPostsResponse>;
}
export interface IPostsState {
	posts: IPostModel[];
	page: number;
	totalPages: number;
}
