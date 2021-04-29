import { IGetProjectsResponse } from "@Interfaces/Api";
import { IProjectModel } from "@Interfaces/Models";

export interface IProjectsProps {
	getProjects: (page, perPage, userId?) => Promise<void | IGetProjectsResponse>;
	userId?: string | string[];
}
export interface IProjectsState {
	projects: IProjectModel[];
	page: number;
	totalPages: number;
	loading: boolean;
}
