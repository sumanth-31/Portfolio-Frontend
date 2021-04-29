import React from "react";
import { BackDrop } from "@Components/index";
import { ILoadingProps } from "@Interfaces/Components";
import "./style.scss";
import { Spinner } from "@Components/Spinner";
export const Loading = (props: ILoadingProps) => {
	if (!props.show) return null;
	return (
		<BackDrop>
			<div className="card loading-card shadow">
				<div className="card-header font-weight-bold">Information</div>
				<div className="card-body text-center">
					{props.message}
					<Spinner show />
				</div>
			</div>
		</BackDrop>
	);
};
