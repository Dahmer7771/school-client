import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
    },
    image: {
        height: "200px",
        float: "left",
        margin: theme.spacing(0, 2, 2, 0),
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing(0, 0, 2),
        },
        [theme.breakpoints.up("xs")]: {
            width: "100%",
        },
        [theme.breakpoints.up("sm")]: {
            width: "42%",
        },
        [theme.breakpoints.up("md")]: {
            width: "33%",
        },
        [theme.breakpoints.up("lg")]: {
            width: "25%",
        },
    },
}));

export default useStyles;
