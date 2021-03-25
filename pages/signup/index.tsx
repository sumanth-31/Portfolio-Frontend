import React, { useState } from "react";
import { connect } from "react-redux";
import { Navbar } from "@Components/index";
import { registerUser } from "@Actions/index";
import "./style.scss";
import { IPostUserRequest } from "@Interfaces/Api";
const Signup = (props: { addUser: typeof registerUser }) => {
	const submitForm = () => {};
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setMail] = useState("");
	const submit = async (e: React.FormEvent) => {
		e.preventDefault();
		const postUserData: IPostUserRequest = { name, email, password };
		await props.addUser(postUserData);
	};
	return (
		<div className="d-flex flex-column position-absolute h-100 w-100">
			<Navbar />
			<div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center w-100 app-bg-primary text-white">
				<h3 className="">Signup Form</h3>
				<form className="w-25" onSubmit={submit}>
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
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (payload: IPostUserRequest) => {
			dispatch(registerUser(payload));
		},
	};
};
export default connect(null, mapDispatchToProps)(Signup);
