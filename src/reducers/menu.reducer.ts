import { Action } from "redux";

const initialState = {
    isMenuOpen: false,
};

const menuReducer = (state: object = initialState, action: Action) => {
    switch (action.type) {
    case "SHOW_MENU":
        return {
            isMenuOpen: true,
        };
    case "HIDE_MENU":
        return {
            isMenuOpen: false,
        };
    default:
        return state;
    }
};

export default menuReducer;
