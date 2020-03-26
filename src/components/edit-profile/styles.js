import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    input: {
        width: "100%",
        marginBottom: theme.spacing(2),
    },
}));

export default useStyles;
