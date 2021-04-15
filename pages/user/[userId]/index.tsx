import { getUser } from "@Actions/index";
import { connect } from "react-redux";
import {
	Body,
	ImageCard,
	Resume,
	Projects,
	PostsCard,
} from "@Components/index";
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
	const { userId } = router.query;
	useEffect(() => {
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
			<div className="row mb-4">
				<div className="profile-pic col-sm mb-5">
					<div className="w-100 h-100">
						<ImageCard image={profilePic}>
							<h3 className="text-center text-capitalize">{user.name}</h3>
						</ImageCard>
					</div>
				</div>
				<div className="col-sm"></div>
				<div className=" col-sm d-flex flex-column justify-content-around">
					<div className="mb-5">
						<Resume user={user} anonymous />
					</div>
					<PostsCard user={user} />
				</div>
			</div>
			<div className="d-flex justify-content-center mb-2">
				<h3 className="text-center mb-4 text-capitalize">{`${user.name}'s Projects`}</h3>
			</div>
			<Projects userId={userId} />
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
