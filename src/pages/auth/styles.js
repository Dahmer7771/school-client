import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    auth: {
        maxWidth: "520px",
        margin: "0 auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "450px",
        [theme.breakpoints.down("xs")]: {
            width: "320px",
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
        margin: theme.spacing(1),
        padding: theme.spacing(2, 4),
        width: "100%",
    },
}));

export default useStyles;
