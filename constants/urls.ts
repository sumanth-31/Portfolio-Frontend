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
	getCollectionsUrl: "collections/",
	getTagsUrl: "tags/",
	getPostsUrl: "posts/",
	updatePostUrl: "update/post/",
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
	myProjectSlugPage: "/myprojects/[projectSlug]",
	projectSlugPage: "/projects/[projectSlug]",
	addProjectPage: "/myprojects/addproject/",
	myPostSlugPage: "/myposts/[postSlug]",
};
