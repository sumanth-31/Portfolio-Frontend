import { IImageCardProps } from "@Interfaces/index";
import React from "react";

export const ImageCard = (props: IImageCardProps) => {
	function changeForm() {
		if (!props.imageChangeHandler) return null;
		return (
			<form>
				<div className="custom-file">
					<input
						className="custom-file-input"
						type="file"
						accept="image/*"
						onChange={(e) => {
							props.imageChangeHandler(e);
						}}
					/>
					<label className="custom-file-label">Choose Picture</label>
				</div>
			</form>
		);
	}
	return (
		<div className="card w-100 h-100 shadow-lg rounded">
			<div className="flex-shrink-1 position-relative w-100 h-100">
				<img
					src={props.image}
					className="card-img-top position-absolute w-100 h-100"
				/>
			</div>
			<div className="card-body">
				{changeForm()}
				{props.children}
			</div>
		</div>
	);
};
