import React from "react";

export interface IImageCardProps {
	image: string;
	children?: React.ReactNode;
	imageChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}
