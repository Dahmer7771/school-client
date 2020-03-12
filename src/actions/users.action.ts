import { Dispatch } from "redux";
import { Action, SchoolService } from "../types";
import history from "../history";

const usersRequest = (): Action => ({
    type: "USERS_REQUEST",
});

const usersSuccess = (users: any): Action => ({
    type: "USERS_SUCCESS",
    payload: {
        users,
    },
});

const usersError = (message: string): Action => ({
    type: "USERS_ERROR",
    payload: {
        message,
    },
});

const getAllUsers = (
    schoolService: SchoolService,
    active: string = "",
) => () => async (dispatch: Dispatch) => {
    dispatch(usersRequest());
    try {
        const responseData = await schoolService.getAllUsers(active);
        dispatch(usersSuccess(responseData));
    } catch (e) {
        if (e.status === 401) {
            localStorage.removeItem("school-user-with-jwt");
            dispatch({ type: "LOGOUT" });
            history.push("/login");
        }
        dispatch(usersError(e.message));
    }
};

const updateUser = (
    schoolService: SchoolService,
    userId: string,
    role: string,
    active?: string,
) => () => async (dispatch: Dispatch) => {
    try {
        await schoolService.updateUser(userId, role);
        const users = await schoolService.getAllUsers(active);
        dispatch(usersSuccess(users));
    } catch (e) {
        if (e.status === 401) {
            localStorage.removeItem("school-user-with-jwt");
            dispatch({ type: "LOGOUT" });
            history.push("/login");
        }
        console.log(e.message);
    }
};

const usersActions = {
    getAllUsers,
    updateUser,
};

export default usersActions;
