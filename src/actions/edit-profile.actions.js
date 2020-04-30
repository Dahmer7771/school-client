// eslint-disable-next-line import/no-cycle
import { authActions } from "./index";

const openProfileEditor = () => ({
    type: "OPEN_PROFILE_EDITOR",
});

const closeProfileEditor = () => ({
    type: "CLOSE_PROFILE_EDITOR",
});

const setProfileName = (name) => ({
    type: "SET_PROFILE_NAME",
    payload: {
        name,
    },
});

const setProfileEmail = (email) => ({
    type: "SET_PROFILE_EMAIL",
    payload: {
        email,
    },
});

const setProfileGrade = (grade) => ({
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

const updateProfileDataError = (message) => ({
    type: "UPDATE_PROFILE_DATA_ERROR",
    payload: {
        message,
    },
});

const updateProfileData = (
    schoolService,
    id,
    data,
    isForm,
) => () => async (dispatch) => {
    try {
        dispatch(updateProfileDataRequest());
        const { token } = JSON.parse(localStorage.getItem("school-user-with-jwt"));
        const updatedUser = await schoolService.updateUser(id, data, isForm);
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
