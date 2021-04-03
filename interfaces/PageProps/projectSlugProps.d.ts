import {
	IGetOwnProjectResponse,
	IPostProjectImageResponse,
	IPostUpdateProjectResponse,
} from "@Interfaces/Api";
import { IProjectModel } from "@Models/index";
export interface IProjectSlugProps {
	uploadImage: (project, file) => void | IPostProjectImageResponse;
	getProject: (id) => Promise<void | IGetOwnProjectResponse>;
	updateProjectDetails: (payload) => Promise<void | IPostUpdateProjectResponse>;
}
export interface IProjectSlugState {
	project?: IProjectModel;
}
