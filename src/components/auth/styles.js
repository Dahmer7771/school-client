import { makeStyles } from "@material-ui/core/styles";

const useAuthStyles = makeStyles((theme) => ({
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
