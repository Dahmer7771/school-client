const success = (message: string) => ({
    type: "SUCCESS",
    message,
});

const error = (message: string) => ({
    type: "ERROR",
    message,
});

const alertActions = {
    success,
    error,
};

export default alertActions;
