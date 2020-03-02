import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import menuReducer from "./menu.reducer";
import modalReducer from "./modal.reducer";

const rootReducer = combineReducers({
    authReducer,
    menuReducer,
    modalReducer,
});

export default rootReducer;
