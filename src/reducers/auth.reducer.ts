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

const loginError = (state: AuthReducerState) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
});

const logout = (state: AuthReducerState) => ({
    ...state,
    isAuth: false,
    currentUser: null,
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
    isAuth: true,
});

const registrationError = (state: AuthReducerState) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
});

const authReducer = (state: AuthReducerState, action: Action) => {
    if (state === undefined) {
        return {
            isAuth: false,
            authentication: false,
            authSuccess: false,
            authError: false,
            currentUser: null,
        };
    }

    switch (action.type) {
    case "LOGIN_REQUEST":
        return loginRequest(state);
    case "LOGIN_SUCCESS":
        return loginSuccess(state, action);
    case "LOGIN_ERROR":
        return loginError(state);
    case "LOGOUT":
        return logout(state);
    case "REGISTRATION_REQUEST":
        return registrationRequest(state);
    case "REGISTRATION_SUCCESS":
        return registrationSuccess(state);
    case "REGISTRATION_ERROR":
        return registrationError(state);
    default:
        return state;
    }
};

export default authReducer;
