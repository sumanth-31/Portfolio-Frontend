import { IProjectModel } from "@Models/index";
import { IMetaData } from "@Interfaces/index";
export interface IGetOwnProjectsResponse {
	projects: IProjectModel[];
	meta: IMetaData;
}
export interface IPostProjectImageResponse {
	project: IProjectModel;
	message: string;
}
export interface IGetOwnProjectResponse {
	project: IProjectModel;
}
export interface IPostUpdateProjectRequest {
	project_id: number;
	name?: string;
	link?: string;
	description?: string;
}
export interface IPostUpdateProjectResponse {
	project: IProjectModel;
	message: string;
}
