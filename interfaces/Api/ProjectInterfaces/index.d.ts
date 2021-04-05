import { IProjectModel } from "@Models/index";
import { IMetaData } from "@Interfaces/index";
export interface IGetOwnProjectsResponse {
	projects: IProjectModel[];
	meta: IMetaData;
}
export interface IGetOwnProjectResponse {
	project: IProjectModel;
}
export interface IPostUpdateProjectResponse {
	project: IProjectModel;
	message: string;
}
export interface IPostUploadProjectResponse {
	project: IProjectModel;
}
