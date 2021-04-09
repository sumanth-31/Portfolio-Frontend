import {
	IGetProjectResponse,
	IPostUpdateProjectResponse,
} from "@Interfaces/Api";
import { IProjectModel } from "@Models/index";
export interface IAuthorizedProjectSlugProps {
	getProject: (projectId, userId?) => Promise<void | IGetProjectResponse>;
	updateProjectDetails: (payload) => Promise<void | IPostUpdateProjectResponse>;
}
export interface IAuthorizedProjectSlugState {
	project?: IProjectModel;
}
