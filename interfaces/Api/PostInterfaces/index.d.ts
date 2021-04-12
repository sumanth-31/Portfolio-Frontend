import { IPostModel } from "@Models/index";
import { IMetaData } from "@Interfaces/index";
export interface IGetPostsResponse {
	posts: IPostModel[];
	meta: IMetaData;
}
