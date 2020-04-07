const loginRequest = (state) => ({
    ...state,
    authentication: true,
    authError: false,
    isAuth: false,
});

const loginSuccess = (state, action) => ({
    ...state,
    authentication: false,
    authError: false,
    isAuth: true,
    currentUser: action.payload,
});

const loginError = (state, action) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
    errorMessage: action.payload.message,
});

const logout = (state) => ({
    ...state,
    isAuth: false,
    currentUser: {},
});

const registrationRequest = (state) => ({
    ...state,
    authentication: true,
    authError: false,
    isAuth: false,
});

const registrationSuccess = (state) => ({
    ...state,
    authentication: false,
    authError: false,
    isAuth: false,
});

const registrationError = (state, action) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
    errorMessage: action.payload.message,
});

const clearAuthError = (state) => ({
    ...state,
    authError: false,
    errorMessage: "",
});

const initialState = {
    isAuth: false,
    authentication: false,
    authSuccess: false,
    authError: false,
    currentUser: {},
    errorMessage: "",
};

const authReducer = (state = initialState, action) => {
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
