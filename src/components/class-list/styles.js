import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        marginBottom: theme.spacing(2),
    },
    input: {
        flexGrow: 1,
    },
    searchButton: {
        margin: theme.spacing(0, 1),
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
    },
}));

export default useStyles;
