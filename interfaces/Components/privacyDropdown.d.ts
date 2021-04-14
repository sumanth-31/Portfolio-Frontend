import React from "react";

export interface IPrivacyDropdownProps {
	value: string;
	changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
