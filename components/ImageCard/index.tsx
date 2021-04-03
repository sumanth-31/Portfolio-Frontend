import { IImageCardProps } from "@Interfaces/index";
import React from "react";

export const ImageCard = (props: IImageCardProps) => {
	return (
		<div className="card w-100 h-100 shadow-lg rounded">
			<div className="flex-shrink-1 position-relative w-100 h-100">
				<img
					src={props.image}
					className="card-img-top position-absolute w-100 h-100"
				/>
			</div>
			<div className="card-body">{props.children}</div>
		</div>
	);
};
