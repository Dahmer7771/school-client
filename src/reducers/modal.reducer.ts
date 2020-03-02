import { Action } from "redux";

const initialState = {
    isModalOpen: false,
};

const modalReducer = (state: object = initialState, action: Action) => {
    switch (action.type) {
    case "SHOW_MODAL":
        return {
            isModalOpen: true,
        };
    case "HIDE_MODAL":
        return {
            isModalOpen: false,
        };
    default:
        return state;
    }
};

export default modalReducer;
