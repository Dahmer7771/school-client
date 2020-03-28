const initialState = {
    dialogWindowOpen: false,
    dialogTitle: "",
    dialogContent: "",
    dialogCb: null,
};

const dialogWindowReducer = (state: object = initialState, action: any) => {
    switch (action.type) {
    case "OPEN_DIALOG_WINDOW":
        return {
            dialogWindowOpen: true,
            dialogTitle: action.payload.dialogTitle,
            dialogContent: action.payload.dialogContent,
            dialogCb: action.payload.dialogCb,
        };
    case "CLOSE_DIALOG_WINDOW":
        return {
            dialogWindowOpen: false,
            dialogTitle: "",
            dialogContent: "",
            dialogCb: null,
        };
    default:
        return state;
    }
};

export default dialogWindowReducer;
