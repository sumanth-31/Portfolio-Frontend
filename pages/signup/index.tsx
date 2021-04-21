import React, { useState } from "react";
import { connect } from "react-redux";
import { Body } from "@Components/index";
import { registerUser } from "@Actions/index";
import { IPostRegisterUserRequest } from "@Interfaces/Api";
import { ISignUpPageProps } from "@Interfaces/PageProps";
import "./style.scss";
const Signup = (props: ISignUpPageProps) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setMail] = useState("");
	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		const postUserData: IPostRegisterUserRequest = { name, email, password };
		await props.addUser(postUserData);
	};
	return (
		<Body style="app-bg-primary d-flex flex-column align-items-center justify-content-center w-100 text-white">
			<h3 className="">Signup Form</h3>
			<form className="signup-form" onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="nameField">Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter your name"
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="emailField">Email Address</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter your email address"
						required
						onChange={(e) => setMail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="passwordField">Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter your password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-group mt-4">
					<button
						className="btn btn-primary w-50 d-block mx-auto"
						type="submit"
					>
						Register
					</button>
				</div>
			</form>
		</Body>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (payload: IPostRegisterUserRequest) => {
			dispatch(registerUser(payload));
		},
	};
};
export default connect(null, mapDispatchToProps)(Signup);
