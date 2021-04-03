import axios from "axios";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import { IGetOwnProjectsResponse } from "@Interfaces/Api";
export function getOwnProjects(page, per_page) {
	const parameters = {
		page: page,
		per_page: per_page,
	};
	const projectsUrl = API_URLS.buildUrl("getProjects", parameters);
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
}
