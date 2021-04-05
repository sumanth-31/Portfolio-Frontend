import { IPostUploadProjectResponse } from "@Interfaces/Api";

export interface IAddProjectProps {
	addProject: (formData) => Promise<void | IPostUploadProjectResponse>;
}
export interface IAddProjectState {
	name: string;
	description: string;
	link: string;
	image?: string;
}
