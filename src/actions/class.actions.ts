import { Dispatch } from "redux";
import { SchoolService } from "../types";

const getAllClassesRequest = () => ({
    type: "GET_ALL_CLASSES_REQUEST",
});

const getAllClassesSuccess = (classList: any) => ({
    type: "GET_ALL_CLASSES_SUCCESS",
    payload: {
        classList,
    },
});

const getAllClassesError = (message: string) => ({
    type: "GET_ALL_CLASSES_ERROR",
    payload: {
        message,
    },
});

const getAllClasses = (
    schoolService: SchoolService,
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(getAllClassesRequest());
        const classList = await schoolService.getAllClasses();
        dispatch(getAllClassesSuccess(classList));
    } catch (e) {
        dispatch(getAllClassesError(e.message));
    }
};

const classActions = {
    getAllClasses,
};

export default classActions;
