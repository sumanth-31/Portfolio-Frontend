import { API_URLS } from "@Constants/index";
import axios from "axios";
import { IPostUserRequest } from "@Interfaces/index";
export const registerUser = (payload: IPostUserRequest) => {
	return (dispatch) => {
		const rawUrl = API_URLS.buildUrl("registerUserUrl");
		return axios
			.post(rawUrl, payload)
			.then((response) => {
				alert("Registration Successful!");
				return response.data;
			})
			.catch((error) => {
				console.log(error);
				let errorMessage = "ErrorOccured!";
				if (error.response) errorMessage += "\n" + error.response.data.message;
				alert(errorMessage);
			});
	};
};
