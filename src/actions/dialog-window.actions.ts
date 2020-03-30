const openDialogWindow = (
    dialogTitle: string,
    dialogContent: string,
    dialogCb: Function,
    confirm: boolean = false,
) => ({
    type: "OPEN_DIALOG_WINDOW",
    payload: {
        dialogTitle,
        dialogContent,
        dialogCb,
        confirm,
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
