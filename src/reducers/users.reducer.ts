const initialState = {
    users: [],
    usersError: false,
    errorMessage: "",
    filterField: "name",
    showMode: "all",
    term: null,
    loading: false,
};

const usersReducer = (state: any = initialState, action: any) => {
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
