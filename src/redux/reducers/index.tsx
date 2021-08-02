import { combineReducers } from "redux";
import { errorReducer } from "./errors";

const rootReducer = combineReducers({
    error: errorReducer,
})
export default rootReducer;