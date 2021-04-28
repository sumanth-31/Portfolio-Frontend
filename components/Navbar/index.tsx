import React from "react";
import { INavbarProps } from "@Interfaces/index";
import { useRouter } from "next/router";
import { PAGE_URLS } from "@Constants/urls";
import { connect } from "react-redux";
import Link from "next/link";
const NavbarComponent = (props: INavbarProps) => {
	const router = useRouter();
	const logout = () => {
		localStorage.removeItem("token");
		alert("You have been logged out!");
		router.push(PAGE_URLS.loginPage);
	};
	const { page, showProfile } = props;
	return (
		<div className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
			<a className="navbar-brand">Portfologger</a>
			{showProfile ? (
				<>
					<button
						className="navbar-toggler"
						data-toggle="collapse"
						data-target="#collapsible"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="collapsible">
						<ul className="navbar-nav ml-auto">
							<li className={`nav-item ${page === "HOME" ? "active" : null}`}>
								<Link href={PAGE_URLS.homePage}>
									<a className="nav-link">Home</a>
								</Link>
							</li>
							<li className={`nav-item ${page === "POSTS" ? "active" : null}`}>
								<Link href={PAGE_URLS.myPostsPage}>
									<a className="nav-link">Posts</a>
								</Link>
							</li>
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
									className="dropdown-menu dropdown-menu-right mr-1"
									aria-labelledby="profileDropDown"
								>
									<button className="dropdown-item" onClick={logout}>
										Logout
									</button>
								</div>
							</li>
						</ul>
					</div>
				</>
			) : null}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		page: state.page,
	};
};
export const Navbar = connect(mapStateToProps)(NavbarComponent);
