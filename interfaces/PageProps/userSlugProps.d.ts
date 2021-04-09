import { IGetUserResponse } from "@Interfaces/Api";

export interface IUserSlugProps {
	getUser: (userId) => Promise<void | IGetUserResponse>;
}
