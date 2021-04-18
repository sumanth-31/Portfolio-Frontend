import { loginThunk } from "@Actions/index";
import { IPostLoginRequest, IPostLoginResponse } from "@Interfaces/Api";
export interface ILoginPageProps {
	login: (payloadIPostLoginRequest) => Promise<void | IPostLoginResponse>;
}
