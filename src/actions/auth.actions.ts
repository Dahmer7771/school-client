import { Dispatch } from "redux";
import {
    Action, UserRegistrationInfo, UserLoginInfo, SchoolService, User,
} from "../types";

// //////////////////////////LOGIN/////////////////////////////////////////

const loginRequest = (): Action => ({
    type: "LOGIN_REQUEST",
});

const loginSuccess = (currentUser: User): Action => ({
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
    let responseData: any = {
        token: "",
    };

    dispatch(loginRequest());
    try {
        responseData = await schoolService.login(userInfo);
        const user = {
            name: responseData.name,
            email: responseData.email,
            token: responseData.token,
        };
        if (responseData.token != null) {
            localStorage.setItem("school-user-with-jwt", JSON.stringify(responseData));
            dispatch(loginSuccess(user));
            history.push("/");
        }
    } catch (e) {
        dispatch(loginError(e));
    }
};

const logout = () => (dispatch: Dispatch) => {
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
        dispatch(registrationSuccess());
        console.log(responseData);
        history.push("/");
    } catch (e) {
        dispatch(registrationError(e));
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
};

export default authActions;
