import { Dispatch } from "redux";
import {
    Action, UserRegistrationInfo, UserLoginInfo, SchoolService,
} from "../types";

// //////////////////////////LOGIN/////////////////////////////////////////

const loginRequest = (): Action => ({
    type: "LOGIN_REQUEST",
});


const loginSuccess = (): Action => ({
    type: "LOGIN_SUCCESS",
});


const loginError = (): Action => ({
    type: "LOGIN_ERROR",
});

const login = (
    schoolService: SchoolService,
    userInfo: UserLoginInfo,
) => () => async (dispatch: Dispatch) => {
    let responseData: {
        token?: string;
    } = {
        token: "",
    };

    dispatch(loginRequest());
    try {
        responseData = await schoolService.login(userInfo);
        dispatch(loginSuccess());
        console.log(responseData.token);
        if (responseData.token != null) localStorage.setItem("school-user-jwt", responseData.token);
    } catch (e) {
        console.log(responseData);
        console.log(e);
        loginError();
    }
};

const logout = () => {

};

// ////////////////////////////REGISTRATION//////////////////////////////////

const registrationRequest = (): Action => ({
    type: "REGISTRATION_REQUEST",
});

const registrationSuccess = (): Action => ({
    type: "REGISTRATION_SUCCESS",
});

const registrationError = (): Action => ({
    type: "REGISTRATION_ERROR",
});

const registration = (
    schoolService: SchoolService,
    userInfo: UserRegistrationInfo,
) => () => async (dispatch: Dispatch) => {
    dispatch(registrationRequest());
    try {
        const responseData = await schoolService.registration(userInfo);
        dispatch(registrationSuccess());
        console.log(responseData);
    } catch (e) {
        dispatch(registrationError());
        console.log(e);
    }
};

const authActions = {
    login,
    logout,
    registration,
};

export default authActions;
