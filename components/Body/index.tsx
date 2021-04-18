import React from "react";
import { Navbar } from "@Components/index";
import { IBodyProps } from "@Interfaces/index";
import "./style.scss";
export const Body = (props: IBodyProps) => {
	return (
		<div className="d-flex flex-column position-absolute h-100 w-100">
			<Navbar showProfile={props.authenticated} />
			<div className={`flex-grow-1 ${props.style ? props.style : ""}`}>
				{props.children}
			</div>
		</div>
	);
};
