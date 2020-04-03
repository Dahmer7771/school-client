const initialState = {
    classList: [],
    classError: false,
    classErrorMessage: "",
    createClassError: false,
    loading: false,
    editing: false,
    editorOpen: false,
    currentClass: {},
};

const classReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
    case "GET_ALL_CLASSES_REQUEST":
        return {
            ...state,
            classList: [],
            classError: false,
            classErrorMessage: "",
            loading: true,
        };
    case "GET_ALL_CLASSES_SUCCESS":
        return {
            ...state,
            classList: action.payload.classList,
            classError: false,
            classErrorMessage: "",
            loading: false,
        };
    case "GET_ALL_CLASSES_ERROR":
        return {
            ...state,
            classList: [],
            classError: false,
            classErrorMessage: action.payload.message,
            loading: false,
        };
    case "CREATE_CLASS_REQUEST":
        return {
            ...state,
            createClassError: false,
            classErrorMessage: "",
            loading: true,
        };
    case "CREATE_CLASS_SUCCESS":
        return {
            ...state,
            createClassError: false,
            classErrorMessage: "",
            loading: false,
        };
    case "CREATE_CLASS_ERROR":
        return {
            ...state,
            createClassError: true,
            classErrorMessage: action.payload.message,
            loading: false,
        };
    case "GET_CLASS_BY_ID_SUCCESS":
        return {
            ...state,
            currentClass: action.payload.currentClass,
        };
    case "OPEN_CLASS_EDITOR":
        return {
            ...state,
            editorOpen: true,
        };
    case "CLOSE_CLASS_EDITOR":
        return {
            ...state,
            editorOpen: false,
        };
    case "SET_EDITING":
        return {
            ...state,
            editing: action.payload.editing,
            createClassError: false,
        };
    default:
        return state;
    }
};

export default classReducer;
