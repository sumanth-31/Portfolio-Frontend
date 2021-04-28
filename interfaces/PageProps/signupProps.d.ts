import { registerUser } from "@Actions/index";
import { IPostRegisterUserRequest } from "@Interfaces/Api";
export interface ISignUpPageProps {
	addUser: (payload: IPostRegisterUserRequest) => Promise<any>;
}
