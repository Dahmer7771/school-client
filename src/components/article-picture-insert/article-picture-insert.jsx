import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const ArticlePictureInsert = ({ setImage }) => {
    const classes = useStyles();

    return (
        <>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => {
                    if (e.target.files !== null) setImage(e.target.files[0]);
                    if (e.target.files !== null) console.log(e.target.files[0]);
                }}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" className={classes.button}>
                    Upload
                </Button>
            </label>
        </>
    );
};

export default ArticlePictureInsert;
