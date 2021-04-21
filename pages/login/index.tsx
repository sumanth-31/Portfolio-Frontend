import React, { useState } from "react";
import { connect } from "react-redux";
import { Body } from "@Components/index";
import { loginThunk } from "@Actions/index";
import { IPostLoginRequest } from "@Interfaces/Api";
import { ILoginPageProps } from "@Interfaces/PageProps";
import { useRouter } from "next/router";
import "./style.scss";
import { PAGE_URLS } from "@Constants/urls";
const Login = (props: ILoginPageProps) => {
	const [password, setPassword] = useState("");
	const [email, setMail] = useState("");
	const router = useRouter();
	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		const postUserData: IPostLoginRequest = { email, password };
		const { login } = props;
		login(postUserData).then((response) => {
			if (!response) return;
			router.push(PAGE_URLS.homePage);
		});
	};
	return (
		<Body style="app-bg-primary d-flex flex-column align-items-center justify-content-center w-100 text-white">
			<h3 className="">Login Form</h3>
			<form className="login-form" onSubmit={submitHandler}>
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
		</Body>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		login: (payload) => {
			return dispatch(loginThunk(payload));
		},
	};
};
export default connect(null, mapDispatchToProps)(Login);
