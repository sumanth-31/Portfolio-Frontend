import axios from "axios";
import React, { Component, useState } from "react";
let Home = () => {
	const [collection, setCollection] = useState("");
	const [file, setFile] = useState(undefined);
	const upload_image = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("resume", file);
		axios
			.post("http://127.0.0.1:8000/upload/resume/", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<form
			onSubmit={(e) => {
				upload_image(e);
			}}
		>
			<input
				name="collection"
				onChange={(e) => setCollection(e.target.value)}
			></input>
			<input
				type="file"
				name="image"
				onChange={(e) => {
					setFile(e.target.files[0]);
				}}
			/>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};
export default Home;
