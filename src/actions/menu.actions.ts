import { Action } from "../types";

const showMenu = (): Action => ({
    type: "SHOW_MENU",
});

const hideMenu = (): Action => ({
    type: "HIDE_MENU",
});

const menuActions = {
    showMenu,
    hideMenu,
};

export default menuActions;
