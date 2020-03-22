import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

const ArticleTitleInput = ({ title, setTitle }: any) => {
    const classes = useStyles();

    return (
        <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={classes.input}
            label="Article Title"
        />
    );
};

export default ArticleTitleInput;
