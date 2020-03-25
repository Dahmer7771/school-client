import { makeStyles } from "@material-ui/core/styles";

const useUsersSearchPanelStyles = makeStyles((theme) => ({
    flexContainer: {
        display: "flex",
        alignItems: "flex-start",
    },
    input: {
        flexGrow: 1,
        marginBottom: theme.spacing(2),
    },
    buttonsGroup: {
        marginLeft: 0,
        marginBottom: theme.spacing(1),
    },
    searchButton: {
        marginLeft: theme.spacing(1),
        marginTop: "1px",
    },
    select: {
        marginLeft: theme.spacing(2),
    },
}));

export default useUsersSearchPanelStyles;
