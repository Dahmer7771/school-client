import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
    contentPreview: {
        margin: 0,
        "& p": {
            margin: 0,
        },
    },
    content: {
        marginLeft: theme.spacing(1),
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    secondaryText: {
        fontSize: "14px",
    },
    date: {
        marginTop: theme.spacing(1),
        width: "200px",
        fontSize: "12px",
        color: "rgb(0, 0, 0, 0.5)",
    },
    dateText: {
        color: theme.palette.text.primary,
    },
    titleAndButtons: {
        display: "flex",
        marginLeft: theme.spacing(1),
        "& > div": {
            flexGrow: 1,
        },
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    button: {
        minWidth: "auto",
    },
}));

export default useStyles;
