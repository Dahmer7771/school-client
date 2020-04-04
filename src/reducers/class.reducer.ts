const initialState = {
    classesList: [],
    getAllError: false,
    getAllMessage: "",
    currentClass: null,
    getByIdError: false,
    getByIdMessage: "",
    updateError: false,
    updateMessage: "",
    createError: false,
    createMessage: "",
    deleteError: false,
    deleteMessage: "",
    classEditorOpen: false,
    loading: false,
};

const classReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
    case "GET_ALL_CLASSES_REQUEST":
        return {
            ...state,
            classesList: [],
            getAllError: false,
            getAllMessage: "",
            loading: true,
        };
    case "GET_ALL_CLASSES_SUCCESS":
        return {
            ...state,
            classesList: action.payload.classesList,
            getAllError: false,
            getAllMessage: "",
            loading: false,
        };
    case "GET_ALL_CLASSES_ERROR":
        return {
            ...state,
            classesList: [],
            getAllError: true,
            getAllMessage: action.payload.message,
            loading: false,
        };
    case "CLEAR_GET_ALL_CLASSES_ERROR":
        return {
            ...state,
            getAllError: false,
            getAllMessage: "",
        };
    case "GET_CLASS_BY_ID_REQUEST":
        return {
            ...state,
            currentClass: null,
            getByIdError: false,
            getByIdMessage: "",
        };
    case "GET_CLASS_BY_ID_SUCCESS":
        return {
            ...state,
            currentClass: action.payload.classesItem,
            getByIdError: false,
            getByIdMessage: "",
        };
    case "GET_CLASS_BY_ID_ERROR":
        return {
            ...state,
            currentClass: null,
            getByIdError: true,
            getByIdMessage: action.payload.message,
        };
    case "CLEAR_GET_CLASS_BY_ID_ERROR":
        return {
            ...state,
            getByIdError: false,
            getByIdMessage: "",
        };
    case "CREATE_CLASS_REQUEST":
        return {
            ...state,
            createError: false,
            createMessage: "",
        };
    case "CREATE_CLASS_SUCCESS":
        return {
            ...state,
            createError: false,
            createMessage: "",
        };
    case "CREATE_CLASS_ERROR":
        return {
            ...state,
            createError: true,
            createMessage: action.payload.message,
        };
    case "CLEAR_CREATE_CLASS_ERROR":
        return {
            ...state,
            createError: false,
            createMessage: "",
        };
    case "UPDATE_CLASS_REQUEST":
        return {
            ...state,
            updateError: false,
            updateMessage: "",
        };
    case "UPDATE_CLASS_SUCCESS":
        return {
            ...state,
            updateError: false,
            updateMessage: "",
        };
    case "UPDATE_CLASS_ERROR":
        return {
            ...state,
            updateError: true,
            updateMessage: action.payload.message,
        };
    case "CLEAR_UPDATE_CLASS_ERROR":
        return {
            ...state,
            updateError: false,
            updateMessage: "",
        };
    case "DELETE_CLASS_REQUEST":
        return {
            ...state,
            deleteError: false,
            deleteMessage: "",
        };
    case "DELETE_CLASS_SUCCESS":
        return {
            ...state,
            deleteError: false,
            deleteMessage: "",
        };
    case "DELETE_CLASS_ERROR":
        return {
            ...state,
            deleteError: true,
            deleteMessage: action.payload.message,
        };
    case "CLEAR_DELETE_CLASS_ERROR":
        return {
            ...state,
            deleteError: false,
            deleteMessage: "",
        };
    case "OPEN_CLASS_EDITOR":
        return {
            ...state,
            classEditorOpen: true,
        };
    case "CLOSE_CLASS_EDITOR":
        return {
            ...state,
            classEditorOpen: false,
            currentClass: null,
            editing: false,
        };
    case "SET_EDITING":
        return {
            ...state,
            editing: action.payload.editing,
        };
    default:
        return state;
    }
};

export default classReducer;
