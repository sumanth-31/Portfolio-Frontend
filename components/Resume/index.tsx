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
const ResumeComponent = (props: IResumeProps) => {
	const submitHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const response: IPostResumeResponse | void = await props.uploadResume(
			e.target.files[0]
		);
		if (!response) return;
		const newUser = response.user;
		setUser(newUser);
		alert("Resume Uploaded Successfully");
	};
	const [user, setUser] = useState(props.user);
	const { anonymous } = props;
	const resumeText = `${user.name}'s Resume`;
	return (
		<div className="bg-white shadow-lg rounded d-flex align-items-center p-4">
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
