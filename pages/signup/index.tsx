import React, { useState } from "react";
import Navbar from "@Components/Navbar";
import "./style.scss";
const Signup = () => {
	return (
		<div className="d-flex flex-column position-absolute h-100 w-100">
			<Navbar />
			<div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center w-100 app-bg-primary text-white">
				<h3 className="">Signup Form</h3>
				<form className="w-25">
					<div className="form-group">
						<label htmlFor="nameField">Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter your name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="emailField">Email Address</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter your email address"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="passwordField">Password Field</label>
						<input
							type="password"
							className="form-control"
							placeholder="Enter your password"
						/>
					</div>
					<div className="form-group mt-4">
						<button
							className="btn btn-primary w-50 d-block mx-auto"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Signup;
