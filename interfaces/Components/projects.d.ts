import { IGetOwnProjectsResponse } from "@Interfaces/Api";
import { IProjectModel } from "@Interfaces/Models";

export interface IProjectsProps {}
export interface IProjectsState {
	projects: IProjectModel[];
	page: number;
	totalPages: number;
}
