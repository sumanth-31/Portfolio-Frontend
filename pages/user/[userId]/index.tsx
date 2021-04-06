import { getUser } from "@Actions/index";
import { connect } from "react-redux";
import { Body, ImageCard, Resume, Projects } from "@Components/index";
import React, { useEffect, useState } from "react";
import { IUserModel, IUserSlugProps } from "@Interfaces/index";
import { imagePaths } from "@Constants/index";
import { useRouter } from "next/router";
import "./style.scss";
const UserSlug = (props: IUserSlugProps) => {
	const { getUser } = props;
	const [user, setUser] = useState<null | IUserModel>(null);
	const [profilePic, setProfilePic] = useState(imagePaths.DEFAULT_PERSON);
	const router = useRouter();
	useEffect(() => {
		const { userId } = router.query;
		getUser(userId).then((response) => {
			if (!response) return;
			const newUser = response.user;
			setUser(newUser);
			if (newUser.image) setProfilePic(newUser.image);
		});
	}, []);
	if (user == null) return <div></div>;
	return (
		<Body style="p-4 bg-white">
			<h3 className="text-center mb-4 text-capitalize">{`${user.name}'s Profile`}</h3>
			<div className="d-flex justify-content-between mb-4 ">
				<div className="w-25 profile-pic">
					<ImageCard image={profilePic}>
						<h3 className="text-center text-capitalize">{user.name}</h3>
					</ImageCard>
				</div>
				<div className="w-50">
					<Resume user={user} anonymous />
				</div>
			</div>
			<div className="d-flex justify-content-center mb-2">
				<h3 className="text-center mb-4 text-capitalize">{`${user.name}'s Projects`}</h3>
			</div>
		</Body>
	);
};
UserSlug.getInitialProps = async (ctx) => {
	return {
		something: 1,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getUser: (userId) => {
			return dispatch(getUser(userId));
		},
	};
};

export default connect(null, mapDispatchToProps)(UserSlug);
