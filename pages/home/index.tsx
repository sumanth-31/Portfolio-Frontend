import { getCurrentUser, uploadProfilePicture } from "@Actions/index";
import { connect } from "react-redux";
import { Body, ImageCard, Resume, Projects } from "@Components/index";
import React, { useEffect, useState } from "react";
import { IUserModel, IHomePageProps } from "@Interfaces/index";
import { imagePaths, PAGE_URLS } from "@Constants/index";
import Link from "next/link";
import "./style.scss";
const Home = (props: IHomePageProps) => {
	const { uploadPicture, getUser } = props;
	const [user, setUser] = useState<null | IUserModel>(null);
	const [profilePic, setProfilePic] = useState(imagePaths.DEFAULT_PERSON);
	useEffect(() => {
		getUser.then((response) => {
			if (!response) return;
			const newUser = response.user;
			setUser(newUser);
			if (newUser.image) setProfilePic(newUser.image);
		});
	}, []);
	const uploadHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const response = await uploadPicture(e.target.files[0]);
		console.log(response);
		if (!response) return;
		const newUser = response.user;
		setUser(newUser);
		setProfilePic(newUser.image);
		console.log("Profile Picture Successfully Uploaded!");
	};
	if (user == null) return <div></div>;
	return (
		<Body style="p-4 bg-white">
			<h3 className="text-center mb-4 text-capitalize">{`${user.name}'s Profile`}</h3>
			<div className="d-flex justify-content-between mb-4 ">
				<div className="w-25 profile-pic">
					<ImageCard image={profilePic} imageChangeHandler={uploadHandler} />
				</div>
				<div className="w-50">
					<Resume user={user} />
				</div>
			</div>
			<div className="d-flex justify-content-center mb-2">
				<h3 className="text-center mb-4 text-capitalize ml-auto">{`${user.name}'s Projects`}</h3>
				<Link href={PAGE_URLS.addProjectPage}>
					<button className="btn btn-primary ml-auto">Add Project +</button>
				</Link>
			</div>
			<Projects />
		</Body>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		uploadPicture: (file) => {
			return dispatch(uploadProfilePicture(file));
		},
		getUser: dispatch(getCurrentUser()),
	};
};

export default connect(null, mapDispatchToProps)(Home);
