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
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
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
        // "& p": {
        //     marginTop: theme.spacing(1),
        //     marginBottom: theme.spacing(1),
        // },
    },
    date: {
        width: "200px",
        alignSelf: "flex-end",
        textAlign: "right",
        fontSize: "12px",
        color: "rgb(0, 0, 0, 0.5)",
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
