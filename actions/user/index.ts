import axios from "axios";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import {
	IGetUserResponse,
	IPostProfilePicResponse,
	IPostResumeResponse,
} from "@Interfaces/Api";
export function getCurrentUser() {
	const userUrl = API_URLS.buildUrl("getUser") + "?self=true";
	return (dispatch) => {
		return axios
			.get(userUrl)
			.then(
				(response): IGetUserResponse => {
					return response.data;
				}
			)
			.catch((err) => {
				handleErrors(err);
			});
	};
}
export function uploadProfilePicture(file) {
	const uploadUrl = API_URLS.buildUrl("uploadProfilePicture");
	const formData = new FormData();
	formData.append("profile_pic", file);
	return (dispatch) => {
		return axios
			.post(uploadUrl, formData)
			.then(
				(response): IPostProfilePicResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}
export function uploadResume(file) {
	const uploadUrl = API_URLS.buildUrl("uploadResume");
	const formData = new FormData();
	formData.append("resume", file);
	return (dispatch) => {
		return axios
			.post(uploadUrl, formData)
			.then(
				(response): IPostResumeResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}
