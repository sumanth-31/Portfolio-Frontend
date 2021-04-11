import axios from "axios";
import { API_URLS } from "@Constants/index";
import { IGetCollectionsResponse } from "@Interfaces/index";
import { handleErrors } from "@Utils/index";
export function getCollections() {
	const getCollectionsUrl = API_URLS.buildUrl("getCollections");
	return (dispatch) => {
		return axios
			.get(getCollectionsUrl)
			.then(
				(response): IGetCollectionsResponse => {
					return response.data;
				}
			)
			.catch((err) => {
				handleErrors(err);
			});
	};
}
