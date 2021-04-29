import { IPostUploadProjectResponse } from "@Interfaces/Api";

export interface IAddProjectProps {
	addProject: (formData) => Promise<void | IPostUploadProjectResponse>;
	setPage: (page) => void;
}
export interface IAddProjectState {
	name: string;
	description: string;
	link: string;
	image?: string;
	loading: boolean;
}
