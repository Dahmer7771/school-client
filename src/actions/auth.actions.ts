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

const loginError = (): Action => ({
    type: "LOGIN_ERROR",
});

const login = (
    schoolService: SchoolService,
    userInfo: UserLoginInfo,
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
            console.log("SUCCESS");
            dispatch(loginSuccess(user));
        }
    } catch (e) {
        console.log(e);
        loginError();
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
