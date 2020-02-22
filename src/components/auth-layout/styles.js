import { makeStyles } from "@material-ui/core/styles";

const useAuthStyles = makeStyles((theme) => ({
    auth: {
        maxWidth: "520px",
        margin: "0 auto",
        [theme.breakpoints.up("sm")]: {
            minHeight: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("xs")]: {
            minHeight: "calc(100% - 48px)",
        },
        display: "flex",
    },
    authInner: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2, 4),
        width: "100%",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        margin: theme.spacing(0, 0, 2, 0),
    },
    email: {
        margin: theme.spacing(0, 0, 1, 0),
    },
    helper: {
        marginTop: theme.spacing(1),
        color: "#f00",
    },
    button: {
        margin: `${theme.spacing(2)}px auto ${theme.spacing(1)}px`,
    },
}));

export default useAuthStyles;
