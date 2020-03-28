import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        marginBottom: theme.spacing(2),
    },
    input: {
        width: "100%",
    },
    button: {
        marginLeft: theme.spacing(1),
    },
}));

export default useStyles;
