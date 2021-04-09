import {
	IGetProjectResponse,
	IPostUpdateProjectResponse,
} from "@Interfaces/Api";
import { IProjectModel } from "@Models/index";
export interface IProjectSlugProps {
	getProject: (projectId, userId?) => Promise<void | IGetProjectResponse>;
}
export interface IProjectSlugState {
	project?: IProjectModel;
}
