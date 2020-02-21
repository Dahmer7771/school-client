import { makeStyles } from "@material-ui/core/styles";

const useAuthStyles = makeStyles(() => ({
    auth: {
        maxWidth: "520px",
        margin: "0 auto",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",

    },
    authInner: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "100%",
    },
}));

export default useAuthStyles;
