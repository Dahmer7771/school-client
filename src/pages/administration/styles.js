import { makeStyles } from "@material-ui/core/styles";

const useArticleCreatorStyles = makeStyles((theme) => ({
    editor: {
        backgroundColor: "#fff",
        minHeight: "300px",
        padding: theme.spacing(0, 1),
    },
}));

export default useArticleCreatorStyles;
