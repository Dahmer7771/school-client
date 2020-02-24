import {
    Action, UserRegistrationInfo, UserLoginInfo, SchoolService,
} from "../types";

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
) => () => async (dispatch: any) => {
    let responseData = {};

    dispatch(loginRequest());
    try {
        responseData = await schoolService.login(userInfo);
        dispatch(loginSuccess());
        console.log(responseData);
    } catch (e) {
        console.log(responseData);
        loginError();
    }
};

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
) => () => async (dispatch: any) => {
    let responseData = {};
    dispatch(registrationRequest());
    try {
        responseData = await schoolService.registration(userInfo);
        dispatch(registrationSuccess());
        console.log(responseData);
    } catch (e) {
        console.log(responseData);
        registrationError();
    }
};

export {
    loginRequest,
    loginSuccess,
    loginError,
    login,
    registrationRequest,
    registrationSuccess,
    registrationError,
    registration,
};
