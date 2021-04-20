import axios from "axios";
import {
	IGetPostResponse,
	IGetPostsResponse,
	IDeletePostRequest,
	IPostUpdatePostRequest,
	IPostUpdatePostResponse,
	IPostUploadPostRequest,
	IPostUploadPostResponse,
} from "@Interfaces/Api";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/httpFunctionUtils";
export function getPostsAction(parameters) {
	const getPostsUrl = API_URLS.buildUrl("postsUrl", parameters);
	return (dispatch) => {
		return axios
			.get(getPostsUrl)
			.then(
				(response): IGetPostsResponse => {
					return response.data;
				}
			)
			.catch((err) => {
				handleErrors(err);
			});
	};
}
export function getPostAction(parameters) {
	const getPostUrl = API_URLS.buildUrl("postsUrl", parameters);
	return (dispatch) => {
		return axios
			.get(getPostUrl)
			.then(
				(response): IGetPostResponse => {
					return response.data;
				}
			)
			.catch((err) => {
				handleErrors(err);
			});
	};
}
export function updatePostAction(payload: IPostUpdatePostRequest) {
	const updatePostUrl = API_URLS.buildUrl("postsUrl");
	return (dispatch) => {
		return axios
			.put(updatePostUrl, payload)
			.then(
				(response): IPostUpdatePostResponse => {
					return response.data;
				}
			)
			.catch((err) => {
				handleErrors(err);
			});
	};
}
export function uploadPostAction(payload: IPostUploadPostRequest) {
	const uploadPostUrl = API_URLS.buildUrl("postsUrl");
	return (dispatch) => {
		return axios
			.post(uploadPostUrl, payload)
			.then(
				(response): IPostUploadPostResponse => {
					return response.data;
				}
			)
			.catch((err) => {
				handleErrors(err);
			});
	};
}
export function deletePostAction(payload: IDeletePostRequest) {
	const deletePostUrl = API_URLS.buildUrl("postsUrl");
	return (dispatch) => {
		return axios
			.delete(deletePostUrl, { data: payload })
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				handleErrors(err);
			});
	};
}
