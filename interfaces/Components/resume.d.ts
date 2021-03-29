import { IPostResumeResponse } from "@Interfaces/Api";
import { IUserModel } from "@Interfaces/Models";
import React from "react";

export interface IResumeProps {
	user: IUserModel;
	uploadResume: (file) => void | IPostResumeResponse;
}
