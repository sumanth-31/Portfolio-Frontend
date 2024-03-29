import axios from "axios";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import {
	IDeleteProjectRequest,
	IGetProjectsResponse,
	IPostUpdateProjectResponse,
	IPostUploadProjectResponse,
} from "@Interfaces/Api";
import { IGetProjectResponse } from "@Interfaces/index";

export function getProjects(page, per_page, userId = null) {
	const parameters = {
		page: page,
		per_page: per_page,
	};
	if (userId !== null) parameters["user_id"] = userId;
	const projectsUrl = API_URLS.buildUrl("projectsUrl", parameters);
	return (dispatch) => {
		return axios
			.get(projectsUrl)
			.then(
				(response): IGetProjectsResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}

export function getProject(projectId, userId = null) {
	const parameters = {
		project_id: projectId,
	};
	if (userId) parameters["user_id"] = userId;
	const projectsUrl = API_URLS.buildUrl("projectsUrl", parameters);
	return (dispatch) => {
		return axios
			.get(projectsUrl)
			.then(
				(response): IGetProjectResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}

export function updateProject(formData) {
	const updateUrl = API_URLS.buildUrl("projectsUrl");
	return (dispatch) => {
		return axios
			.put(updateUrl, formData)
			.then(
				(response): IPostUpdateProjectResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}
export function uploadProject(formData) {
	const uploadProjectUrl = API_URLS.buildUrl("projectsUrl");
	return (dispatch) => {
		return axios
			.post(uploadProjectUrl, formData)
			.then(
				(response): IPostUploadProjectResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}
export function deleteProjectAction(payload: IDeleteProjectRequest) {
	const deleteProjectUrl = API_URLS.buildUrl("projectsUrl");
	return (dispatch) => {
		return axios
			.delete(deleteProjectUrl, { data: payload })
			.then((response) => {
				return response.data;
			})
			.catch((err) => {
				handleErrors(err);
			});
	};
}
