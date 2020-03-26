import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        position: "sticky",
        top: 0,
    },
    logo: {
        height: "42px",
        marginRight: "16px",
        [theme.breakpoints.down("xs")]: {
            height: "34px",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
        },
    },
    title: {
        "& > a": {
            textDecoration: "none",
            color: theme.palette.primary.contrastText,
        },
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    headerTitleWrapper: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
    },
}));

export default useStyles;
