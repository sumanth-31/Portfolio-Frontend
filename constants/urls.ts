const API_PORT = 8000;
const API_BASE_URl = "http://localhost:" + API_PORT + "/";
export const API_URLS = {
	registerUserUrl: "add_user/",
	buildUrl: function (url: string) {
		return API_BASE_URl + this[url];
	},
};
