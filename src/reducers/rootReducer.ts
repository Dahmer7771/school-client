import { State, Action } from "../types";

const loginRequest = (state: State) => ({
    ...state,
    authentication: true,
    authError: false,
    isAuth: false,
});

const loginSuccess = (state: State) => ({
    ...state,
    authentication: false,
    authError: false,
    isAuth: true,
});

const loginError = (state: State) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
});

const registrationRequest = (state: State) => ({
    ...state,
    authentication: true,
    authError: false,
    isAuth: false,
});

const registrationSuccess = (state: State) => ({
    ...state,
    authentication: false,
    authError: false,
    isAuth: true,
});

const registrationError = (state: State) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
});

const toggleMenu = (state: State) => ({
    ...state,
    isMenuOpen: !state.isMenuOpen,
});

const initialState: State = {
    posts: [],
    isAuth: false,
    authentication: false,
    authSuccess: false,
    authError: false,
    isMenuOpen: false,
};

const rootReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
    case "LOGIN_REQUEST":
        return loginRequest(state);
    case "LOGIN_SUCCESS":
        return loginSuccess(state);
    case "LOGIN_ERROR":
        return loginError(state);
    case "REGISTRATION_REQUEST":
        return registrationRequest(state);
    case "REGISTRATION_SUCCESS":
        return registrationSuccess(state);
    case "REGISTRATION_ERROR":
        return registrationError(state);
    case "TOGGLE_MENU":
        return toggleMenu(state);
    default:
        return state;
    }
};

export default rootReducer;
