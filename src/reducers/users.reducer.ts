const initialState = {
    users: [],
    usersError: false,
    errorMessage: "",
};

const usersReducer = (state: object = initialState, action: any) => {
    switch (action.type) {
    case "USERS_REQUEST":
        return {
            users: [],
            usersError: false,
            errorMessage: null,
        };
    case "USERS_SUCCESS":
        return {
            users: action.payload.users,
            usersError: false,
            errorMessage: null,
        };
    case "USERS_ERROR":
        return {
            users: [],
            usersError: true,
            errorMessage: action.payload.message,
        };
    default:
        return state;
    }
};

export default usersReducer;
