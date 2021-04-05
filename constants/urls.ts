const API_PORT = 8000;
const API_BASE_URl = "http://localhost:" + API_PORT + "/";
export const API_URLS = {
	signupUrl: "add_user/",
	loginUrl: "login/",
	getUserUrl: "user/",
	uploadProfilePictureUrl: "upload/profile_pic/",
	uploadResumeUrl: "upload/resume/",
	getProjectsUrl: "projects/",
	uploadProjectUrl: "upload/project/",
	updateProjectUrl: "update/project/",
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
	homePage: "/home",
	loginPage: "/login/",
	projectSlugPage: "/myprojects/[projectSlug]",
	addProjectPage: "/myprojects/addproject/",
};
