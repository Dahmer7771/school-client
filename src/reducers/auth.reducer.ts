import {
    Action, AuthReducerState,
} from "../types";

const loginRequest = (state: AuthReducerState) => ({
    ...state,
    authentication: true,
    authError: false,
    isAuth: false,
});

const loginSuccess = (state: AuthReducerState, action: Action) => ({
    ...state,
    authentication: false,
    authError: false,
    isAuth: true,
    currentUser: action.payload,
});

const loginError = (state: AuthReducerState, action: any) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
    errorMessage: action.payload.message,
});

const logout = (state: AuthReducerState) => ({
    ...state,
    isAuth: false,
    currentUser: {},
});

const registrationRequest = (state: AuthReducerState) => ({
    ...state,
    authentication: true,
    authError: false,
    isAuth: false,
});

const registrationSuccess = (state: AuthReducerState) => ({
    ...state,
    authentication: false,
    authError: false,
    isAuth: false,
});

const registrationError = (state: AuthReducerState, action: any) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
    errorMessage: action.payload.message,
});

const clearAuthError = (state: AuthReducerState) => ({
    ...state,
    authError: false,
    errorMessage: "",
});

const authReducer = (state: AuthReducerState, action: Action) => {
    if (state === undefined) {
        return {
            isAuth: false,
            authentication: false,
            authSuccess: false,
            authError: false,
            currentUser: {},
            errorMessage: "",
        };
    }

    switch (action.type) {
    case "LOGIN_REQUEST":
        return loginRequest(state);
    case "LOGIN_SUCCESS":
        return loginSuccess(state, action);
    case "LOGIN_ERROR":
        return loginError(state, action);
    case "LOGOUT":
        return logout(state);
    case "REGISTRATION_REQUEST":
        return registrationRequest(state);
    case "REGISTRATION_SUCCESS":
        return registrationSuccess(state);
    case "REGISTRATION_ERROR":
        return registrationError(state, action);
    case "CLEAR_AUTH_ERROR":
        return clearAuthError(state);
    default:
        return state;
    }
};

export default authReducer;
