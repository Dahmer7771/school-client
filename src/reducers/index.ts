import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import menuReducer from "./menu.reducer";
import modalReducer from "./modal.reducer";
import usersReducer from "./users.reducer";
import articlesReducer from "./articles.reducer";
import profileEditorReducer from "./profile-editor.reducer";
import articleCreatorReducer from "./article-creator.reducer";
import alertReducer from "./alert.reducer";
import editProfileReducer from "./edit-profile.reducer";
import classReducer from "./class.reducer";

const rootReducer = combineReducers({
    authReducer,
    menuReducer,
    modalReducer,
    usersReducer,
    articlesReducer,
    profileEditorReducer,
    articleCreatorReducer,
    alertReducer,
    editProfileReducer,
    classReducer,
});

export default rootReducer;
