import React from "react";
import { IConfirmDialogProps } from "@Interfaces/index";
import { BackDrop } from "@Components/index";
import "./style.scss";
export const ConfirmDialog = (props: IConfirmDialogProps) => {
	const { confirmHandler, show } = props;
	if (!show) return null;
	return (
		<BackDrop>
			<div className="card confirm-dialog overflow-auto">
				<div className="card-header">Confirmation!</div>
				<div className="card-body">{props.message}</div>
				<div className="card-footer d-flex justify-content-between">
					<button
						className="btn btn-info"
						onClick={(e) => {
							confirmHandler(false);
						}}
					>
						NO
					</button>
					<button
						className="btn btn-danger"
						onClick={(e) => {
							confirmHandler(true);
						}}
					>
						YES
					</button>
				</div>
			</div>
		</BackDrop>
	);
};
