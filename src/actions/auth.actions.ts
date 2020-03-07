import { Dispatch } from "redux";
import {
    Action, UserRegistrationInfo, UserLoginInfo, SchoolService,
} from "../types";

// //////////////////////////LOGIN/////////////////////////////////////////

const loginRequest = (): Action => ({
    type: "LOGIN_REQUEST",
});

const loginSuccess = (currentUser: any): Action => ({
    type: "LOGIN_SUCCESS",
    payload: currentUser,
});

const loginError = (message: string): Action => ({
    type: "LOGIN_ERROR",
    payload: {
        message,
    },
});

const login = (
    schoolService: SchoolService,
    userInfo: UserLoginInfo,
    history: any,
) => () => async (dispatch: Dispatch) => {
    dispatch(loginRequest());
    try {
        const user = await schoolService.login(userInfo);
        localStorage.setItem("school-user-with-jwt", JSON.stringify(user));
        dispatch(loginSuccess(user));
        history.push("/");
    } catch (e) {
        console.log(e);
        dispatch(loginError(e.message));
    }
};

const checkAuthorization = () => (dispatch: Dispatch) => {
    const LSItem = localStorage.getItem("school-user-with-jwt");
    if (LSItem) {
        dispatch(loginSuccess(JSON.parse(LSItem)));
    }
};


const logout = () => (dispatch: Dispatch) => {
    console.log("LOGOUT");
    localStorage.removeItem("school-user-with-jwt");
    dispatch({ type: "LOGOUT" });
};

// ////////////////////////////REGISTRATION//////////////////////////////////

const registrationRequest = (): Action => ({
    type: "REGISTRATION_REQUEST",
});

const registrationSuccess = (): Action => ({
    type: "REGISTRATION_SUCCESS",
});

const registrationError = (message: string): Action => ({
    type: "REGISTRATION_ERROR",
    payload: {
        message,
    },
});

const registration = (
    schoolService: SchoolService,
    userInfo: UserRegistrationInfo,
    history: any,
) => () => async (dispatch: Dispatch) => {
    dispatch(registrationRequest());
    try {
        const responseData = await schoolService.registration(userInfo);
        console.log(responseData);
        dispatch(registrationSuccess());
        history.push("/login");
    } catch (e) {
        dispatch(registrationError(e.message));
    }
};

const clearAuthError = (): Action => ({
    type: "CLEAR_AUTH_ERROR",
});

const authActions = {
    login,
    logout,
    registration,
    clearAuthError,
    checkAuthorization,
};

export default authActions;
