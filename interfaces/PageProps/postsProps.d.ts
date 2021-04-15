import { IGetUserResponse } from "@Interfaces/Api";

export interface IPostsPageProps {
	getUser: (userId) => Promise<void | IGetUserResponse>;
}
