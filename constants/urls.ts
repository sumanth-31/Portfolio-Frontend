const API_PORT = 8000;
const API_BASE_URl = "http://localhost:" + API_PORT + "/";
export let FRONTEND_URL = "http://localhost:3000";
if (process.env.NODE_ENV == "production")
	FRONTEND_URL = "https://portfologger.herokuapp.com";
export const API_URLS = {
	signupUrl: "add_user/",
	loginUrl: "login/",
	getUserUrl: "user/",
	uploadProfilePictureUrl: "upload/profile_pic/",
	uploadResumeUrl: "upload/resume/",
	projectsUrl: "projects/",
	collectionsUrl: "collections/",
	tagsUrl: "tags/",
	postsUrl: "posts/",
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
	projectSlugPage: "/user/[userId]/projects/[projectSlug]",
	addProjectPage: "/myprojects/addproject",
	myPostSlugPage: "/myposts/[postSlug]",
	postSlugPage: "/user/[userSlug]/posts/[postSlug]",
	myPostsPage: "/myposts",
	postsPage: "/user/[userSlug]/posts/",
	addPostPage: "/myposts/addpost/",
	signupPage: "/signup/",
};
