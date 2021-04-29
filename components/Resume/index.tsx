import { imagePaths } from "@Constants/index";
import { connect } from "react-redux";
import {
	IResumeProps,
	IUserModel,
	IPostResumeResponse,
} from "@Interfaces/index";
import React, { useState } from "react";
import { uploadResume } from "@Actions/index";
import "./style.scss";
import { Loading } from "@Components/Loading";
const ResumeComponent = (props: IResumeProps) => {
	const [user, setUser] = useState(props.user);
	const [loading, setLoading] = useState(false);
	const { anonymous } = props;
	const resumeText = `${user.name}'s Resume`;
	const submitHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setLoading(true);
		const response: IPostResumeResponse | void = await props.uploadResume(
			e.target.files[0]
		);
		setLoading(false);
		if (!response) return;
		const newUser = response.user;
		setUser(newUser);
		alert("Resume Uploaded Successfully");
	};
	const loadingMessage = "Uploading Resume...";

	return (
		<div className="bg-white shadow-lg rounded d-flex align-items-center p-4">
			<Loading message={loadingMessage} show={loading} />
			<img src={imagePaths.RESUME} className="resume-icon" />
			<div className="resume-content flex-grow-1">
				<a
					className="flex-shrink-1 text-truncate ml-4 text-capitalize"
					href={user.resume ? user.resume : "#"}
					title={resumeText}
					target="_blank"
				>
					{resumeText}
				</a>
				{anonymous ? null : (
					<form>
						<div className="custom-file">
							<label className="custom-file-label">Choose File</label>
							<input
								className="custom-file-input"
								type="file"
								accept="application/pdf,application/msword"
								onChange={submitHandler}
							/>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		uploadResume: (file) => {
			return dispatch(uploadResume(file));
		},
	};
};
export const Resume = connect(null, mapDispatchToProps)(ResumeComponent);
