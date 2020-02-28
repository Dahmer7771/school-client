import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import menuReducer from "./menu.reducer";

const rootReducer = combineReducers({
    authReducer,
    menuReducer,
});

export default rootReducer;
