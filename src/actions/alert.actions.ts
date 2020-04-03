const openAlert = (
    dialogTitle: string,
    dialogContent: string,
    dialogCb: Function,
    confirm: boolean = false,
) => ({
    type: "OPEN_ALERT",
    payload: {
        dialogTitle,
        dialogContent,
        dialogCb,
        confirm,
    },
});

const closeAlert = () => ({
    type: "CLOSE_ALERT",
});

const alertActions = {
    openAlert,
    closeAlert,
};

export default alertActions;
