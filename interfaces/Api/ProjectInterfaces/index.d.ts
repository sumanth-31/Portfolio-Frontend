import { IProjectModel } from "@Models/index";
import { IMetaData } from "@Interfaces/index";
export interface IGetOwnProjectsResponse {
	projects: IProjectModel[];
	meta: IMetaData;
}
