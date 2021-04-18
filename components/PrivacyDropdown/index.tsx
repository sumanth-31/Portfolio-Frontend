import { IPrivacyDropdownProps } from "@Interfaces/Components";
import React from "react";

export const PrivacyDropdown = (props: IPrivacyDropdownProps) => {
	const { changeHandler, value } = props;
	return (
		<div className="form-group w-100">
			<h4 className="text-center mb-4">Privacy</h4>
			<select
				className="form-control mb-5"
				onChange={changeHandler}
				value={value}
				name="privacy"
			>
				<option value="public">Public</option>
				<option value="private">Private</option>
			</select>
		</div>
	);
};
