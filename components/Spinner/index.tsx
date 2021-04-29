import React from "react";
import { ISpinnerProps } from "@Interfaces/index";
import "./style.scss";

export const Spinner = (props: ISpinnerProps) => {
	if (!props.show) return null;
	return <div className="Loader"></div>;
};
