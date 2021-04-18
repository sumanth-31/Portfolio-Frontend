import { IGetUserResponse, IPostProfilePicResponse } from "@Interfaces/Api";
import { IUserModel } from "@Models/index";
export interface IHomePageProps {
	uploadPicture: (file) => void | IPostProfilePicResponse;
	getUser: Promise<void | IGetUserResponse>;
	setPage: (page) => void;
}
