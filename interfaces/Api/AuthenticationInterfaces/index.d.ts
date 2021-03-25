export interface IGetUserResponse {}
export interface IPostUserRequest {
	name: string;
	email: string;
	password: string;
}
export interface IPostUserResponse {
	id: number;
	name: string;
	email: string;
}
