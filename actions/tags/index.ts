import axios from "axios";
import { API_URLS } from "@Constants/index";
import { handleErrors } from "@Utils/index";
import { IGetTagsResponse } from "@Interfaces/Api";
export function getTags() {
	const tagsUrl = API_URLS.buildUrl("getTagsUrl");
	return (dispatch) => {
		return axios
			.get(tagsUrl)
			.then(
				(response): IGetTagsResponse => {
					return response.data;
				}
			)
			.catch((err) => {
				handleErrors(err);
			});
	};
}
