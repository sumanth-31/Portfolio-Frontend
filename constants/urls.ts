const API_PORT = 8000;
const API_BASE_URl = "http://localhost:" + API_PORT + "/";
export const API_URLS = {
	signupUrl: "add_user/",
	loginUrl: "login/",
	getUser: "user/",
	uploadProfilePicture: "upload/profile_pic/",
	uploadResume: "upload/resume/",
	getProjects: "projects/",
	uploadProject: "upload/project/",
	uploadProjectImage: "upload/project_image/",
	updateProject: "update/project/",
	buildUrl: function (url: string, parameters?: {}) {
		let rawUrl = API_BASE_URl + this[url];
		if (!parameters) return rawUrl;
		rawUrl += "?";
		Object.keys(parameters).map((key) => {
			rawUrl += key + "=" + parameters[key] + "&";
		});
		return rawUrl;
	},
};
export const PAGE_URLS = {
	homePage: "/",
	loginPage: "/login/",
};
