const initialState = {
    dialogWindowOpen: false,
    dialogTitle: "",
    dialogContent: "",
    dialogCb: null,
    confirm: false,
};

const dialogWindowReducer = (state: object = initialState, action: any) => {
    switch (action.type) {
    case "OPEN_DIALOG_WINDOW":
        return {
            dialogWindowOpen: true,
            dialogTitle: action.payload.dialogTitle,
            dialogContent: action.payload.dialogContent,
            dialogCb: action.payload.dialogCb,
            confirm: action.payload.confirm,
        };
    case "CLOSE_DIALOG_WINDOW":
        return {
            dialogWindowOpen: false,
            dialogTitle: "",
            dialogContent: "",
            dialogCb: null,
            confirm: false,
        };
    default:
        return state;
    }
};

export default dialogWindowReducer;
