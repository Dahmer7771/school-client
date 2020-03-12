import { makeStyles } from "@material-ui/core/styles";

const useUsersSearchPanelStyles = makeStyles((theme) => ({
    panelContainer: {
        display: "flex",
        alignItems: "center",
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            display: "block",
        },
    },
    input: {
        flexGrow: 1,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            marginBottom: theme.spacing(1),
        },
    },
    buttonsGroup: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            marginBottom: theme.spacing(1),
        },
    },
}));

export default useUsersSearchPanelStyles;
