const getAllClassesRequest = () => ({
    type: "GET_ALL_CLASSES_REQUEST",
});

const getAllClassesSuccess = (classesList) => ({
    type: "GET_ALL_CLASSES_SUCCESS",
    payload: { classesList },
});

const getAllClassesError = (message) => ({
    type: "GET_ALL_CLASSES_ERROR",
    payload: { message },
});

const clearGetAllClassesError = () => ({
    type: "CLEAR_GET_ALL_CLASSES_ERROR",
});

const getAllClasses = (
    schoolService,
) => () => async (dispatch) => {
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

const getClassByIdSuccess = (classesItem) => ({
    type: "GET_CLASS_BY_ID_SUCCESS",
    payload: { classesItem },
});

const getClassByIdError = (message) => ({
    type: "GET_CLASS_BY_ID_ERROR",
    payload: { message },
});

const clearGetClassByIdError = () => ({
    type: "CLEAR_GET_CLASS_BY_ID_ERROR",
});

const getClassById = (
    schoolService,
    id,
) => () => async (dispatch) => {
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

const createClassSuccess = (newClass) => ({
    type: "CREATE_CLASS_SUCCESS",
    payload: { newClass },
});

const createClassError = (message) => ({
    type: "CREATE_CLASS_ERROR",
    payload: { message },
});

const clearCreateClassError = () => ({
    type: "CLEAR_CREATE_CLASS_ERROR",
});

const createClass = (
    schoolService,
    data,
) => () => async (dispatch) => {
    try {
        dispatch(createClassRequest());
        const newClass = await schoolService.createClass(data);
        dispatch(createClassSuccess(newClass));
    } catch (e) {
        dispatch(createClassError(e.message));
    }
};

const updateClassRequest = () => ({
    type: "UPDATE_CLASS_REQUEST",
});

const updateClassSuccess = (updatedClass) => ({
    type: "UPDATE_CLASS_SUCCESS",
    payload: { updatedClass },
});

const updateClassError = (message) => ({
    type: "UPDATE_CLASS_ERROR",
    payload: { message },
});

const clearUpdateClassError = () => ({
    type: "CLEAR_UPDATE_CLASS_ERROR",
});

const updateClass = (
    schoolService,
    id,
    data,
) => () => async (dispatch) => {
    try {
        dispatch(updateClassRequest());
        const updatedClass = await schoolService.updateClass(id, data);
        dispatch(updateClassSuccess(updatedClass));
    } catch (e) {
        dispatch(updateClassError(e.message));
    }
};

const deleteClassRequest = () => ({
    type: "DELETE_CLASS_REQUEST",
});

const deleteClassSuccess = (deletedClass) => ({
    type: "DELETE_CLASS_SUCCESS",
    payload: { deletedClass },
});

const deleteClassError = (message) => ({
    type: "DELETE_CLASS_ERROR",
    payload: { message },
});

const clearDeleteClassError = () => ({
    type: "CLEAR_DELETE_CLASS_ERROR",
});

const deleteClass = (
    schoolService,
    id,
) => () => async (dispatch) => {
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

const setEditing = (editing) => ({
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
