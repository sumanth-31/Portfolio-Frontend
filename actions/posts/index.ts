import axios from "axios";
import { IGetPostsResponse } from "@Interfaces/Api";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/httpFunctionUtils";
export function getPostsAction(parameters) {
	const getPostsUrl = API_URLS.buildUrl("getPostsUrl", parameters);
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
