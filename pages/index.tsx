import React from "react";
import { useRouter } from "next/router";
import { PAGE_URLS } from "@Constants/urls";
const Intro = () => {
	const router = useRouter();
	if (typeof window !== "undefined") router.push(PAGE_URLS.homePage);
	return null;
};
export default Intro;
