// eslint-disable-next-line import/no-cycle
import { authActions } from "./index";

const usersRequest = () => ({
    type: "USERS_REQUEST",
});

const usersSuccess = (users) => ({
    type: "USERS_SUCCESS",
    payload: {
        users,
    },
});

const usersError = (message) => ({
    type: "USERS_ERROR",
    payload: {
        message,
    },
});

const getAllUsers = (
    schoolService,
    active = "all",
) => () => async (dispatch) => {
    dispatch(usersRequest());
    try {
        const responseData = await schoolService.getAllUsers(active);
        dispatch(usersSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(usersError(e.message));
    }
};

const teachersSuccess = (teachers) => ({
    type: "TEACHERS_SUCCESS",
    payload: {
        teachers,
    },
});

const getAllTeachers = (
    schoolService,
    active = "all",
) => () => async (dispatch) => {
    dispatch(usersRequest());
    try {
        const responseData = await schoolService.getAllUsers(active, "", "", true);
        dispatch(teachersSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(usersError(e.message));
    }
};

const updateUser = (
    schoolService,
    userId,
    data,
) => () => async (dispatch) => {
    try {
        await schoolService.updateUser(userId, data);
        dispatch(usersRequest());
        const responseData = await schoolService.getAllUsers("all");
        dispatch(usersSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
    }
};

const findUsers = (
    schoolService,
    active = "all",
    filter,
    term,
) => () => async (dispatch) => {
    dispatch(usersRequest());
    try {
        const responseData = await schoolService.getAllUsers(active, filter, term);
        dispatch(usersSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(usersError(e.message));
    }
};

const setShowMode = (showMode) => ({
    type: "SET_SHOW_MODE",
    payload: {
        showMode,
    },
});

const setUsersTerm = (term) => ({
    type: "SET_USERS_TERM",
    payload: {
        term,
    },
});

const setFilterField = (filterField) => ({
    type: "SET_FILTER_FIELD",
    payload: {
        filterField,
    },
});

const usersActions = {
    getAllUsers,
    updateUser,
    findUsers,
    setShowMode,
    setUsersTerm,
    setFilterField,
    getAllTeachers,
};

export default usersActions;
