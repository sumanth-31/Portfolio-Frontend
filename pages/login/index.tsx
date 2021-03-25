import React, { useState } from "react";
import { connect } from "react-redux";
import { Navbar } from "@Components/index";
import { login } from "@Actions/index";
import { IPostLoginRequest } from "@Interfaces/Api";
import { ILoginPageProps } from "@Interfaces/PageProps";
import "./style.scss";
const Login = (props: ILoginPageProps) => {
	const [password, setPassword] = useState("");
	const [email, setMail] = useState("");
	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		const postUserData: IPostLoginRequest = { email, password };
		await props.login(postUserData);
	};
	return (
		<div className="d-flex flex-column position-absolute h-100 w-100">
			<Navbar />
			<div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center w-100 app-bg-primary text-white">
				<h3 className="">Login Form</h3>
				<form className="w-25" onSubmit={submitHandler}>
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
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		login: (payload) => {
			dispatch(login(payload));
		},
	};
};
export default connect(null, mapDispatchToProps)(Login);
