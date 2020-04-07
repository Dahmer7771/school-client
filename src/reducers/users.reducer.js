const initialState = {
    users: [],
    teachers: [],
    usersError: false,
    errorMessage: "",
    filterField: "name",
    showMode: "all",
    term: null,
    loading: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
    case "USERS_REQUEST":
        return {
            ...state,
            users: [],
            usersError: false,
            errorMessage: null,
            loading: true,
        };
    case "USERS_SUCCESS":
        return {
            ...state,
            users: action.payload.users,
            usersError: false,
            errorMessage: null,
            loading: false,
        };
    case "USERS_ERROR":
        return {
            ...state,
            users: [],
            usersError: true,
            errorMessage: action.payload.message,
            loading: false,
        };
    case "TEACHERS_SUCCESS":
        return {
            ...state,
            teachers: action.payload.teachers,
        };
    case "SET_SHOW_MODE":
        return {
            ...state,
            showMode: action.payload.showMode,
        };
    case "SET_TERM":
        return {
            ...state,
            term: action.payload.term,
        };
    case "SET_FILTER_FIELD":
        return {
            ...state,
            filterField: action.payload.filterField,
        };
    case "SET_USERS_TERM":
        return {
            ...state,
            term: action.payload.term,
        };
    default:
        return state;
    }
};

export default usersReducer;
