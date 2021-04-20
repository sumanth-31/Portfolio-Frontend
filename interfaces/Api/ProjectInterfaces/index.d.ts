import { IProjectModel } from "@Models/index";
import { IMetaData } from "@Interfaces/index";
export interface IGetProjectsResponse {
	projects: IProjectModel[];
	meta: IMetaData;
}
export interface IGetProjectResponse {
	project: IProjectModel;
}
export interface IPostUpdateProjectResponse {
	project: IProjectModel;
	message: string;
}
export interface IPostUploadProjectResponse {
	project: IProjectModel;
}
export interface IDeleteProjectRequest {
	project_id: number;
}
