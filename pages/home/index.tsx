import { getUser, uploadProfilePicture } from "@Actions/index";
import { connect } from "react-redux";
import {
	Body,
	ImageCard,
	Resume,
	Projects,
	PostsCard,
	Loading,
} from "@Components/index";
import React, { useEffect, useState } from "react";
import { IUserModel, IHomePageProps } from "@Interfaces/index";
import { FRONTEND_URL, imagePaths, PAGE_URLS } from "@Constants/index";
import { setPageAction } from "@ActionCreators/index";
import Link from "next/link";
import "./style.scss";

const Home = (props: IHomePageProps) => {
	const { uploadPicture, getUser, setPage } = props;
	const [user, setUser] = useState<null | IUserModel>(null);
	const [profilePic, setProfilePic] = useState(imagePaths.DEFAULT_PERSON);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setPage("HOME");
		getUser.then((response) => {
			if (!response) return;
			const newUser = response.user;
			setUser(newUser);
			if (newUser.image) setProfilePic(newUser.image);
		});
	}, []);
	const uploadHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setLoading(true);
		const response = await uploadPicture(e.target.files[0]);
		if (!response) return;
		setLoading(false);
		const newUser = response.user;
		setUser(newUser);
		setProfilePic(newUser.image);
		alert("Profile Picture Successfully Uploaded!");
	};
	const publicProfileUrl = user ? `${FRONTEND_URL}/user/${user.id}` : null;
	if (user == null) {
		return <Loading message="Loading..." show />;
	}
	const loadingMessage = "Uploading profile picture...";
	return (
		<Body style="p-4 bg-white text-break" authenticated>
			<Loading message={loadingMessage} show={loading} />
			<h3 className="text-center mb-3 text-capitalize">{`${user.name}'s Profile`}</h3>
			<p className="text-center mb-5">
				Your Public Profile Url:{" "}
				<a href={publicProfileUrl}>{publicProfileUrl}</a>
			</p>
			<div className="row mb-5">
				<div className="col-lg mb-5">
					<div className="w-100 profile-pic">
						<ImageCard
							image={profilePic}
							imageChangeHandler={uploadHandler}
						></ImageCard>
					</div>
				</div>
				<div className=" col-lg d-flex flex-column justify-content-around">
					<div className="mb-5">
						<Resume user={user} />
					</div>
					<PostsCard user={user} authenticated />
				</div>
			</div>
			<div className="projects-title mb-2">
				<h3 className="text-center mb-4 text-capitalize">{`${user.name}'s Projects`}</h3>
				<Link href={PAGE_URLS.addProjectPage}>
					<button className="btn btn-primary mb-4">Add Project +</button>
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
		getUser: dispatch(getUser()),
		setPage: (page) => {
			dispatch(setPageAction(page));
		},
	};
};

export default connect(null, mapDispatchToProps)(Home);
