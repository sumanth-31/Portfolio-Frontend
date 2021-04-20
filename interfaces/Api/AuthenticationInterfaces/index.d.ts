import { IUserModel } from "@Interfaces/Models";

export interface IPostRegisterUserRequest {
	name: string;
	email: string;
	password: string;
}
export interface IPostUserResponse {
	id: number;
	name: string;
	email: string;
}
export interface IPostLoginRequest {
	email: string;
	password: string;
}
export interface IPostLoginResponse {
	user: IUserModel;
	token: string;
}
