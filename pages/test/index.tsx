import React, { Component, useState } from "react";
import { ConfirmDialog } from "@Components/index";
const Home = () => {
	const deleteHandler = (confirm: boolean) => {
		if (confirm) console.log("Delete");
		else console.log("Cancel");
	};
	return <ConfirmDialog message="Delete?" confirmHandler={deleteHandler} />;
};
export default Home;
