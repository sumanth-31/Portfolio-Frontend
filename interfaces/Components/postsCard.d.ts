import { IUserModel } from "@Interfaces/Models";

export interface IPostsCardProps {
	user: IUserModel;
	authenticated?: boolean;
}
