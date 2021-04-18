import { ACTION_CONSTANTS } from "@Constants/actionConstants";

export const pageReducer = (defaultPage = "other", action) => {
	switch (action.type) {
		case ACTION_CONSTANTS.CHANGE_PAGE:
			return action.payload["page"];
		default:
			return defaultPage;
	}
};
