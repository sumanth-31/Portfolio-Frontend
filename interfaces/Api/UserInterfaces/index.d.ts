import { IUserModel } from "@Models/index";
export interface IGetUserRequest {}
export interface IGetUserResponse {
	user: IUserModel;
}
export interface IPostProfilePicResponse {
	user: IUserModel;
	message: string;
}
export interface IPostResumeResponse extends IPostProfilePicResponse {}
