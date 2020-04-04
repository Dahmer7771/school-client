import { Dispatch } from "redux";
import { SchoolService } from "../types";

const getAllClassesRequest = () => ({
    type: "GET_ALL_CLASSES_REQUEST",
});

const getAllClassesSuccess = (classesList: any) => ({
    type: "GET_ALL_CLASSES_SUCCESS",
    payload: { classesList },
});

const getAllClassesError = (message: string) => ({
    type: "GET_ALL_CLASSES_ERROR",
    payload: { message },
});

const clearGetAllClassesError = () => ({
    type: "CLEAR_GET_ALL_CLASSES_ERROR",
});

const getAllClasses = (
    schoolService: SchoolService,
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(getAllClassesRequest());
        const classesList = await schoolService.getAllClasses();
        dispatch(getAllClassesSuccess(classesList));
    } catch (e) {
        dispatch(getAllClassesError(e.message));
    }
};

const getClassByIdRequest = () => ({
    type: "GET_CLASS_BY_ID_REQUEST",
});

const getClassByIdSuccess = (classesItem: any) => ({
    type: "GET_CLASS_BY_ID_SUCCESS",
    payload: { classesItem },
});

const getClassByIdError = (message: string) => ({
    type: "GET_CLASS_BY_ID_ERROR",
    payload: { message },
});

const clearGetClassByIdError = () => ({
    type: "CLEAR_GET_CLASS_BY_ID_ERROR",
});

const getClassById = (
    schoolService: SchoolService,
    id: string,
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(getClassByIdRequest());
        const classesItem = await schoolService.getClassById(id);
        dispatch(getClassByIdSuccess(classesItem));
    } catch (e) {
        dispatch(getClassByIdError(e.message));
    }
};

const createClassRequest = () => ({
    type: "CREATE_CLASS_REQUEST",
});

const createClassSuccess = (newClass: any) => ({
    type: "CREATE_CLASS_SUCCESS",
    payload: { newClass },
});

const createClassError = (message: string) => ({
    type: "CREATE_CLASS_ERROR",
    payload: { message },
});

const clearCreateClassError = () => ({
    type: "CLEAR_CREATE_CLASS_ERROR",
});

const createClass = (
    schoolService: SchoolService,
    data: any,
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(createClassRequest());
        const newClass = await schoolService.createClass(data);
        dispatch(createClassSuccess(newClass));
        getAllClasses(schoolService)()(dispatch);
    } catch (e) {
        dispatch(createClassError(e.message));
    }
};

const updateClassRequest = () => ({
    type: "UPDATE_CLASS_REQUEST",
});

const updateClassSuccess = (updatedClass: any) => ({
    type: "UPDATE_CLASS_SUCCESS",
    payload: { updatedClass },
});

const updateClassError = (message: string) => ({
    type: "UPDATE_CLASS_ERROR",
    payload: { message },
});

const clearUpdateClassError = () => ({
    type: "CLEAR_UPDATE_CLASS_ERROR",
});

const updateClass = (
    schoolService: SchoolService,
    id: string,
    data: any,
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(updateClassRequest());
        const updatedClass = await schoolService.updateClass(id, data);
        dispatch(updateClassSuccess(updatedClass));
        getAllClasses(schoolService)()(dispatch);
    } catch (e) {
        dispatch(updateClassError(e.message));
    }
};

const deleteClassRequest = () => ({
    type: "DELETE_CLASS_REQUEST",
});

const deleteClassSuccess = (deletedClass: any) => ({
    type: "DELETE_CLASS_SUCCESS",
    payload: { deletedClass },
});

const deleteClassError = (message: string) => ({
    type: "DELETE_CLASS_ERROR",
    payload: { message },
});

const clearDeleteClassError = () => ({
    type: "CLEAR_DELETE_CLASS_ERROR",
});

const deleteClass = (
    schoolService: SchoolService,
    id: string,
) => () => async (dispatch: Dispatch) => {
    try {
        dispatch(deleteClassRequest());
        const deletedClass = await schoolService.deleteClass(id);
        dispatch(deleteClassSuccess(deletedClass));
        getAllClasses(schoolService)()(dispatch);
    } catch (e) {
        dispatch(deleteClassError(e.message));
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
    payload: { editing },
});

const classActions = {
    getAllClasses,
    getClassById,
    createClass,
    updateClass,
    deleteClass,
    clearGetAllClassesError,
    clearGetClassByIdError,
    clearCreateClassError,
    clearUpdateClassError,
    clearDeleteClassError,
    openClassEditor,
    closeClassEditor,
    setEditing,
};

export default classActions;
