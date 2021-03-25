import React from "react";
import { Navbar } from "@Components/index";
const Login = () => {
	return (
		<div className="d-flex flex-column position-absolute h-100 w-100">
			<Navbar />
			<div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center w-100 app-bg-primary text-white">
				<h3 className="">Login Form</h3>
				<form className="w-25">
					<div className="form-group">
						<label htmlFor="emailField">Email Address</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter your email address"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="passwordField">Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter your password"
							required
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
export default Login;
