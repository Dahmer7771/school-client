import { makeStyles } from "@material-ui/core/styles";

const useProfileDetailsStyles = makeStyles((theme) => ({
    avatar: {
        width: "100px",
        height: "100px",
        margin: "16px auto",
    },
    detailsContainer: {
        padding: theme.spacing(1, 2),
    },
    detailsTextContainer: {
        margin: theme.spacing(3, 0),
    },
    detailsText: {
        display: "flex",
        marginBottom: theme.spacing(1),
        wordWrap: "break-word",
    },
    detailsIcon: {
        marginRight: theme.spacing(2),
    },
    profileHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    warningText: {
        color: "red",
    },
}));

export default useProfileDetailsStyles;
