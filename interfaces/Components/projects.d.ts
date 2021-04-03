import { IGetOwnProjectsResponse } from "@Interfaces/Api";
import { IProjectModel } from "@Interfaces/Models";

export interface IProjectsProps {
	getProjects: (page, perPage) => Promise<void | IGetOwnProjectsResponse>;
}
export interface IProjectsState {
	projects: IProjectModel[];
	page: number;
	totalPages: number;
}
