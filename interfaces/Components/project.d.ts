import { IProjectModel, IUserModel } from "@Interfaces/Models";

export interface IProjectProps {
	project: IProjectModel;
	userId?: string | string[];
}
