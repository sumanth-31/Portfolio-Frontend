import axios from "axios";
export function configureAxios() {
	if (typeof window != "undefined") {
		const appStorage = localStorage;
		if (appStorage.getItem("token")) {
			axios.defaults.headers.common["Authorization"] =
				"Bearer " + appStorage.getItem("token");
		}
	}
}
