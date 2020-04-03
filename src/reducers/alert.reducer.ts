const initialState = {
    alertOpen: false,
    alertTitle: "",
    alertContent: "",
    alertCb: null,
    confirm: false,
};

const alertReducer = (state: object = initialState, action: any) => {
    switch (action.type) {
    case "OPEN_ALERT":
        return {
            alertOpen: true,
            alertTitle: action.payload.dialogTitle,
            alertContent: action.payload.dialogContent,
            alertCb: action.payload.dialogCb,
            confirm: action.payload.confirm,
        };
    case "CLOSE_ALERT":
        return {
            alertOpen: false,
            alertTitle: "",
            alertContent: "",
            alertCb: null,
            confirm: false,
        };
    default:
        return state;
    }
};

export default alertReducer;
