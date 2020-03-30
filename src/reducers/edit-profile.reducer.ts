const initialState = {
    loading: false,
    email: null,
    name: null,
    grade: null,
    editProfileError: false,
    editProfileMessage: "",
    isProfileEditorOpen: false,
};

const editProfileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
    case "SET_PROFILE_NAME":
        return {
            ...state,
            name: action.payload.name,
        };
    case "SET_PROFILE_EMAIL":
        return {
            ...state,
            email: action.payload.email,
        };
    case "SET_PROFILE_GRADE":
        return {
            ...state,
            grade: action.payload.grade,
        };
    case "UPDATE_PROFILE_DATA_REQUEST":
        return {
            ...state,
            editProfileError: false,
            editProfileMessage: "",
            loading: true,
        };
    case "UPDATE_PROFILE_DATA_SUCCESS":
        return {
            ...state,
            editProfileError: false,
            editProfileMessage: "",
            loading: false,
        };
    case "UPDATE_PROFILE_DATA_ERROR":
        return {
            ...state,
            editProfileError: true,
            editProfileMessage: action.payload.message,
            loading: false,
        };
    case "OPEN_PROFILE_EDITOR":
        return {
            ...state,
            isProfileEditorOpen: true,
        };
    case "CLOSE_PROFILE_EDITOR":
        return {
            ...state,
            isProfileEditorOpen: false,
        };
    default:
        return state;
    }
};

export default editProfileReducer;
