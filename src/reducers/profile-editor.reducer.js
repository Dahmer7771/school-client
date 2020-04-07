const initialState = {
    isProfileEditorOpen: false,
};

const profileEditorReducer = (state = initialState, action) => {
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
