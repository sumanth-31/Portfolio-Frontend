import React from "react";

const Navbar = () => {
	return (
		<div className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
			<a className="navbar-brand">Portfolio</a>
			<button
				className="navbar-toggler"
				data-toggle="collapse"
				data-target="collapsible"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="collapsible">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle "
							data-toggle="dropdown"
							id="profileDropDown"
							role="button"
						>
							Profile
						</a>
						<div
							className="dropdown-menu mr-1"
							aria-labelledby="profileDropDown"
						>
							<a className="dropdown-item">Logout</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
