import { getCurrentUser, uploadProfilePicture } from "@Actions/index";
import { connect } from "react-redux";
import { Body, ImageCard, Resume, Projects } from "@Components/index";
import React, { useEffect, useState } from "react";
import { IUserModel, IHomePageProps } from "@Interfaces/index";
import { imagePaths } from "@Constants/index";
import "./style.scss";
const Home = (props: IHomePageProps) => {
	const { uploadPicture } = props;
	const [user, setUser] = useState<null | IUserModel>(null);
	const [profilePic, setProfilePic] = useState(imagePaths.DEFAULT_PERSON);
	useEffect(() => {
		getCurrentUser().then((response) => {
			if (response) {
				const newUser = response.user;
				setUser(newUser);
				if (newUser.image) setProfilePic(newUser.image);
			}
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
					<ImageCard image={profilePic}>
						<form>
							<div className="custom-file">
								<input
									className="custom-file-input"
									type="file"
									accept="image/*"
									onChange={(e) => {
										uploadHandler(e);
									}}
								/>
								<label className="custom-file-label">Choose Picture</label>
							</div>
						</form>
					</ImageCard>
				</div>
				<div className="w-50">
					<Resume user={user} />
				</div>
			</div>
			<div className="d-flex justify-content-center mb-2">
				<h3 className="text-center mb-4 text-capitalize ml-auto">{`${user.name}'s Projects`}</h3>
				<button className="btn btn-primary ml-auto">Add Project +</button>
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
	};
};

export default connect(null, mapDispatchToProps)(Home);
