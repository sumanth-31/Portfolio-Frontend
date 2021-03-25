import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import axios from "axios";
import { IPostLoginRequest, IPostRegisterUserRequest } from "@Interfaces/index";
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
		return axios
			.post(loginUrl, payload)
			.then((response) => {
				alert("You are logged in!");
				return response.data;
			})
			.catch((error) => {
				handleErrors(error);
			});
	};
};
