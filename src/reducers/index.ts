import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import menuReducer from "./menu.reducer";
import modalReducer from "./modal.reducer";
import usersReducer from "./users.reducer";
import articlesReducer from "./articles.reducer";

const rootReducer = combineReducers({
    authReducer,
    menuReducer,
    modalReducer,
    usersReducer,
    articlesReducer,
});

export default rootReducer;
