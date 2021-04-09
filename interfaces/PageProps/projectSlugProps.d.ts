import {
	IGetOwnProjectResponse,
	IPostUpdateProjectResponse,
} from "@Interfaces/Api";
import { IProjectModel } from "@Models/index";
export interface IProjectSlugProps {
	getProject: (projectId, userId?) => Promise<void | IGetOwnProjectResponse>;
	updateProjectDetails: (payload) => Promise<void | IPostUpdateProjectResponse>;
}
export interface IProjectSlugState {
	project?: IProjectModel;
}
