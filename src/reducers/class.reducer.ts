const initialState = {
    classList: [],
    classError: false,
    classErrorMessage: "",
    loading: false,
};

const classReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
    case "GET_ALL_CLASSES_REQUEST":
        return {
            classList: [],
            classError: false,
            classErrorMessage: "",
            loading: true,
        };
    case "GET_ALL_CLASSES_SUCCESS":
        return {
            classList: action.payload.classList,
            classError: false,
            classErrorMessage: "",
            loading: false,
        };
    case "GET_ALL_CLASSES_ERROR":
        return {
            classList: [],
            classError: false,
            classErrorMessage: action.payload.message,
            loading: true,
        };
    default:
        return state;
    }
};

export default classReducer;
