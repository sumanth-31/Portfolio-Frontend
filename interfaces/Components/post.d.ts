import { IPostModel, IUserModel } from "@Interfaces/Models";

export interface IPostProps {
	post: IPostModel;
	user?: IUserModel;
}
