import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: "flex",
        alignItems: "center",
    },
    submit: {
        marginTop: theme.spacing(2),
        marginLeft: "auto",
        display: "block",
    },
}));

export default useStyles;
