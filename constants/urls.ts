const API_PORT = 8000;
const API_BASE_URl = "http://localhost:" + API_PORT + "/";
export const API_URLS = {
	signupUrl: "add_user/",
	loginUrl: "login/",
	buildUrl: function (url: string) {
		return API_BASE_URl + this[url];
	},
};
