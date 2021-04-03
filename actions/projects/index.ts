import axios from "axios";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import {
	IGetOwnProjectsResponse,
	IPostProjectImageResponse,
	IPostUpdateProjectRequest,
	IPostUpdateProjectResponse,
} from "@Interfaces/Api";
import { IGetOwnProjectResponse } from "@Interfaces/index";
export function getOwnProjects(page, per_page) {
	const parameters = {
		page: page,
		per_page: per_page,
	};
	const projectsUrl = API_URLS.buildUrl("getProjects", parameters);
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
	const projectsUrl = API_URLS.buildUrl("getProjects", parameters);
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
export function uploadProjectImage(projectId, file) {
	const uploadUrl = API_URLS.buildUrl("uploadProjectImage");
	const formData = new FormData();
	formData.append("project", projectId);
	formData.append("project_image", file);
	return (dispatch) => {
		return axios
			.post(uploadUrl, formData)
			.then(
				(response): IPostProjectImageResponse => {
					return response.data;
				}
			)
			.catch((error) => {
				handleErrors(error);
			});
	};
}
export function updateProject(payload: IPostUpdateProjectRequest) {
	const updateUrl = API_URLS.buildUrl("updateProject");
	return (dispatch) => {
		return axios
			.post(updateUrl, payload)
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
