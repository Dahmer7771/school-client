import { makeStyles } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        position: "sticky",
        top: 0,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        "& > a": {
            textDecoration: "none",
            color: theme.palette.primary.contrastText,
        },
    },
}));

export default useHeaderStyles;
