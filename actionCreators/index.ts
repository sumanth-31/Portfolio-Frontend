import { ACTION_CONSTANTS } from "@Constants/actionConstants";

export function setPageAction(page) {
	return { type: ACTION_CONSTANTS.CHANGE_PAGE, payload: { page: page } };
}
