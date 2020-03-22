import {
    Action,
} from "../types";

const openProfileEditor = (): Action => ({
    type: "OPEN_PROFILE_EDITOR",
});

const closeProfileEditor = (): Action => ({
    type: "CLOSE_PROFILE_EDITOR",
});

const profileEditorActions = {
    openProfileEditor,
    closeProfileEditor,
};

export default profileEditorActions;
