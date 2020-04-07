import history from "../history";

const loginRequest = () => ({
    type: "LOGIN_REQUEST",
});

const loginSuccess = (currentUser) => ({
    type: "LOGIN_SUCCESS",
    payload: currentUser,
});

const loginError = (message) => ({
    type: "LOGIN_ERROR",
    payload: {
        message,
    },
});

const login = (
    schoolService,
    userInfo,
) => () => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const user = await schoolService.login(userInfo);
        localStorage.setItem("school-user-with-jwt", JSON.stringify(user));
        dispatch(loginSuccess(user));
        history.push("/");
    } catch (e) {
        dispatch(loginError(e.message));
    }
};

const checkAuthorization = () => (dispatch) => {
    const LSItem = localStorage.getItem("school-user-with-jwt");
    if (LSItem) dispatch(loginSuccess(JSON.parse(LSItem)));
};

const logoutRequest = () => ({
    type: "LOGOUT",
});

const logout = () => (dispatch) => {
    localStorage.removeItem("school-user-with-jwt");
    dispatch(logoutRequest());
    history.push("/login");
};

const registrationRequest = () => ({
    type: "REGISTRATION_REQUEST",
});

const registrationSuccess = () => ({
    type: "REGISTRATION_SUCCESS",
});

const registrationError = (message) => ({
    type: "REGISTRATION_ERROR",
    payload: {
        message,
    },
});

const registration = (
    schoolService,
    userInfo,
) => () => async (dispatch) => {
    dispatch(registrationRequest());
    try {
        await schoolService.registration(userInfo);
        dispatch(registrationSuccess());
        history.push("/login");
    } catch (e) {
        dispatch(registrationError(e.message));
    }
};

const clearAuthError = () => ({
    type: "CLEAR_AUTH_ERROR",
});

const authActions = {
    login,
    logout,
    registration,
    clearAuthError,
    checkAuthorization,
    loginSuccess,
};

export default authActions;
