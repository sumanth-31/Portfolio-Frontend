import React, { Component, useState } from "react";
import { Loading, Spinner } from "@Components/index";
const Home = () => {
	const deleteHandler = (confirm: boolean) => {
		if (confirm) console.log("Delete");
		else console.log("Cancel");
	};
	return <Spinner />;
};
export default Home;
