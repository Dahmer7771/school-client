const openDialogWindow = (dialogTitle: string, dialogContent: string, dialogCb: Function) => ({
    type: "OPEN_DIALOG_WINDOW",
    payload: {
        dialogTitle,
        dialogContent,
        dialogCb,
    },
});

const closeDialogWindow = () => ({
    type: "CLOSE_DIALOG_WINDOW",
});

const dialogWindowActions = {
    openDialogWindow,
    closeDialogWindow,
};

export default dialogWindowActions;
