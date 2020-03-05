import { Dispatch } from "redux";
import { Action, SchoolService } from "../types";

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
) => () => async (dispatch: Dispatch) => {
    dispatch(usersRequest());
    try {
        const responseData = await schoolService.getAllUsers();
        dispatch(usersSuccess(responseData));
        console.log(responseData);
    } catch (e) {
        dispatch(usersError(e));
    }
};

const usersActions = {
    getAllUsers,
};

export default usersActions;
