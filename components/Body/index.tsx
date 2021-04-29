import React from "react";
import { Navbar } from "@Components/index";
import { IBodyProps } from "@Interfaces/index";
import "./style.scss";
export const Body = (props: IBodyProps) => {
	return (
		<div className="d-flex flex-column min-vh-100 app-body">
			<Navbar showProfile={props.authenticated} />
			<div className={`flex-grow-1 ${props.style ? props.style : ""}`}>
				{props.children}
			</div>
		</div>
	);
};
