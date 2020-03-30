import { Dispatch } from "redux";
import { Action, SchoolService } from "../types";
import { authActions } from "./index";

const openProfileEditor = (): Action => ({
    type: "OPEN_PROFILE_EDITOR",
});

const closeProfileEditor = (): Action => ({
    type: "CLOSE_PROFILE_EDITOR",
});

const setProfileName = (name: string) => ({
    type: "SET_PROFILE_NAME",
    payload: {
        name,
    },
});

const setProfileEmail = (email: string) => ({
    type: "SET_PROFILE_EMAIL",
    payload: {
        email,
    },
});

const setProfileGrade = (grade: string) => ({
    type: "SET_PROFILE_GRADE",
    payload: {
        grade,
    },
});

const updateProfileDataRequest = () => ({
    type: "UPDATE_PROFILE_DATA_REQUEST",
});

const updateProfileDataSuccess = () => ({
    type: "UPDATE_PROFILE_DATA_SUCCESS",
});

const updateProfileDataError = (message: string) => ({
    type: "UPDATE_PROFILE_DATA_ERROR",
    payload: {
        message,
    },
});

const updateProfileData = (
    schoolService: SchoolService,
    id: string,
    data: {},
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(updateProfileDataRequest());
        // @ts-ignore
        const { token } = JSON.parse(localStorage.getItem("school-user-with-jwt"));
        const updatedUser = await schoolService.updateUser(id, data);
        updatedUser.token = token;
        dispatch(authActions.loginSuccess(updatedUser));
        localStorage.setItem("school-user-with-jwt", JSON.stringify(updatedUser));
        dispatch(updateProfileDataSuccess());
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(updateProfileDataError(e.message));
    }
};

const editProfileActions = {
    setProfileName,
    setProfileEmail,
    setProfileGrade,
    updateProfileData,
    openProfileEditor,
    closeProfileEditor,
    updateProfileDataSuccess,
};

export default editProfileActions;
