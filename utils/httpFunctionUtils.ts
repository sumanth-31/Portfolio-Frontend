import { AxiosError } from "axios";
import { PAGE_URLS } from "@Constants/index";
import Router from "next/router";
export function handleErrors(error: AxiosError) {
	console.log(error);
	if (typeof window == "undefined") return;
	if (error.response && error.response.status == 401) {
		alert("Error!\nYou are not authenticated!\nKindly Login");
		localStorage.removeItem("token");
		Router.push(PAGE_URLS.loginPage);
		return;
	}
	let errorMessage = "Error Occured!";
	if (error.response) errorMessage += "\n" + error.response.data.message;
	alert(errorMessage);
}
