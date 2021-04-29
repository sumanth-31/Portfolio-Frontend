import React, { useState } from "react";
import { connect } from "react-redux";
import { Body, Loading } from "@Components/index";
import { registerUser } from "@Actions/index";
import { IPostRegisterUserRequest } from "@Interfaces/Api";
import { ISignUpPageProps } from "@Interfaces/PageProps";
import Link from "next/link";
import { useRouter } from "next/router";
import { PAGE_URLS } from "@Constants/urls";
import "./style.scss";
const Signup = (props: ISignUpPageProps) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setMail] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		const postUserData: IPostRegisterUserRequest = { name, email, password };
		props.addUser(postUserData).then((response) => {
			setLoading(false);
			router.push(PAGE_URLS.loginPage);
		});
	};
	const loadingMessage = "Adding User...";
	return (
		<Body style="app-bg-primary d-flex flex-column align-items-center justify-content-center w-100 text-white">
			<Loading message={loadingMessage} show={loading} />
			<h3 className="">Signup Form</h3>
			<form className="signup-form mt-5" onSubmit={submitHandler}>
				<div className="form-group">
					<label htmlFor="nameField">Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter your name"
						required
						onChange={(e) => setName(e.target.value)}
						maxLength={50}
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
				<div className="form-group my-4">
					<button
						className="btn btn-primary w-50 d-block mx-auto"
						type="submit"
					>
						Register
					</button>
				</div>
				<Link href={PAGE_URLS.loginPage}>
					<a className="text-center d-block text-break">
						Already have an account?
					</a>
				</Link>
			</form>
		</Body>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (payload: IPostRegisterUserRequest) => {
			return dispatch(registerUser(payload));
		},
	};
};
export default connect(null, mapDispatchToProps)(Signup);
