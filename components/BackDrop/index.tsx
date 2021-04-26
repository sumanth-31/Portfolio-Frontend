import React from "react";
import { IBackDropProps } from "@Interfaces/index";
import "./style.scss";
export const BackDrop = (props: IBackDropProps) => {
	return (
		<div className="vw-100 vh-100 position-fixed backdrop d-flex justify-content-center align-items-center">
			{props.children}
		</div>
	);
};
