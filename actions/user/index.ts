import axios from "axios";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import {
	IGetUserResponse,
	IPostProfilePicResponse,
	IPostResumeResponse,
} from "@Interfaces/Api";
export function getUser(userId = null) {
	let parameters = {};
	if (userId) parameters["user_id"] = userId;
	else parameters["self"] = "true";
	const userUrl = API_URLS.buildUrl("getUserUrl", parameters);
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
	const uploadUrl = API_URLS.buildUrl("uploadProfilePictureUrl");
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
	const uploadUrl = API_URLS.buildUrl("uploadResumeUrl");
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
