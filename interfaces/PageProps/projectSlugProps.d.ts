import {
	IGetOwnProjectResponse,
	IPostUpdateProjectResponse,
} from "@Interfaces/Api";
import { IProjectModel } from "@Models/index";
export interface IProjectSlugProps {
	getProject: (id) => Promise<void | IGetOwnProjectResponse>;
	updateProjectDetails: (payload) => Promise<void | IPostUpdateProjectResponse>;
}
export interface IProjectSlugState {
	project?: IProjectModel;
}
