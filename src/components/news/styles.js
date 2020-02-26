import { makeStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        padding: theme.spacing(1),
        margin: theme.spacing(2, 0),
    },
    details: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        background: "center / contain no-repeat url('./images/logo.png') ",
        width: "300px",
    },
    avatar: {
        backgroundColor: red[500],
    },
    divider: {
        marginBottom: theme.spacing(2),
    },
}));

export default useStyles;
