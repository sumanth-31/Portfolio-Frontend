import { combineReducers } from "redux";
import { pageReducer } from "@Reducers/pageReducer";
export default combineReducers({
	page: pageReducer,
});
