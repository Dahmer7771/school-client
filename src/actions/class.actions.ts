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

const createClassRequest = () => ({
    type: "CREATE_CLASS_REQUEST",
});

const createClassSuccess = (newClass: any) => ({
    type: "CREATE_CLASS_SUCCESS",
    payload: {
        newClass,
    },
});

const createClassError = (message: string) => ({
    type: "CREATE_CLASS_ERROR",
    payload: {
        message,
    },
});

const createClass = (
    schoolService: SchoolService,
    data: any,
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(createClassRequest());
        const newClass = await schoolService.createClass(data);
        dispatch(createClassSuccess(newClass));
    } catch (e) {
        dispatch(createClassError(e.message));
    }
};

const updateClass = (
    schoolService: SchoolService,
    id: string,
    data: any,
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(createClassRequest());
        const newClass = await schoolService.updateClass(id, data);
        dispatch(createClassSuccess(newClass));
    } catch (e) {
        dispatch(createClassError(e.message));
    }
};

const getClassByIdSuccess = (currentClass: any) => ({
    type: "GET_CLASS_BY_ID_SUCCESS",
    payload: {
        currentClass,
    },
});

const getClassById = (
    schoolService: SchoolService,
    id: string,
) => () => async (dispatch: Dispatch) => {
    try {
        const newClass = await schoolService.getClassById(id);
        dispatch(getClassByIdSuccess(newClass));
    } catch (e) {
        dispatch(createClassError(e.message));
    }
};

const openClassEditor = () => ({
    type: "OPEN_CLASS_EDITOR",
});

const closeClassEditor = () => ({
    type: "CLOSE_CLASS_EDITOR",
});

const setEditing = (editing: boolean) => ({
    type: "SET_EDITING",
    payload: {
        editing,
    },
});

const classActions = {
    getAllClasses,
    createClass,
    updateClass,
    getClassById,
    openClassEditor,
    closeClassEditor,
    setEditing,
};

export default classActions;
