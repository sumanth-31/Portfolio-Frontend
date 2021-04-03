import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import axios from "axios";
import {
	IPostLoginRequest,
	IPostLoginResponse,
	IPostRegisterUserRequest,
} from "@Interfaces/index";
export const registerUser = (payload: IPostRegisterUserRequest) => {
	return (dispatch) => {
		const singnupUrl = API_URLS.buildUrl("signupUrl");
		return axios
			.post(singnupUrl, payload)
			.then((response) => {
				alert("Registration Successful!");
				return response.data;
			})
			.catch((error) => {
				handleErrors(error);
			});
	};
};
export const login = (payload: IPostLoginRequest) => {
	return (dispatch) => {
		const loginUrl = API_URLS.buildUrl("loginUrl");
		console.log(axios.defaults);
		return axios
			.post(loginUrl, payload)
			.then(
				(response): IPostLoginResponse => {
					const appStorage = localStorage;
					appStorage.setItem("token", response.data.token);
					alert("You are logged in!");
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
};
