import { Action } from "redux";

const initialState = {
    isProfileEditorOpen: true,
};

const profileEditorReducer = (state: object = initialState, action: Action) => {
    switch (action.type) {
    case "OPEN_PROFILE_EDITOR":
        return {
            isProfileEditorOpen: true,
        };
    case "CLOSE_PROFILE_EDITOR":
        return {
            isProfileEditorOpen: false,
        };
    default:
        return state;
    }
};

export default profileEditorReducer;
