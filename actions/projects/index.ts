import axios from "axios";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import {
	IGetOwnProjectsResponse,
	IPostUpdateProjectResponse,
	IPostUploadProjectResponse,
} from "@Interfaces/Api";
import { IGetOwnProjectResponse } from "@Interfaces/index";
export function getOwnProjects(page, per_page) {
	const parameters = {
		page: page,
		per_page: per_page,
	};
	const projectsUrl = API_URLS.buildUrl("getProjectsUrl", parameters);
	return (dispatch) => {
		return axios
			.get(projectsUrl)
			.then(
				(response): IGetOwnProjectsResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}
export function getOwnProject(projectId) {
	const parameters = {
		project_id: projectId,
	};
	const projectsUrl = API_URLS.buildUrl("getProjectsUrl", parameters);
	return (dispatch) => {
		return axios
			.get(projectsUrl)
			.then(
				(response): IGetOwnProjectResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}
export function updateProject(formData) {
	const updateUrl = API_URLS.buildUrl("updateProjectUrl");
	return (dispatch) => {
		return axios
			.post(updateUrl, formData)
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
	const uploadProjectUrl = API_URLS.buildUrl("uploadProjectUrl");
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
