import React from "react";
import {
    Paper,
    Typography,
    FormControl,
    Button,
} from "@material-ui/core";
import useAuthStyles from "./styles";

const AuthLayout = () => {
    const classes = useAuthStyles();

    return (
        <div className={classes.auth}>
            <div className={classes.authInner}>
                <Paper className={classes.paper} elevation={3}>
                    Auth
                </Paper>
            </div>
        </div>
    );
};

export default AuthLayout;
