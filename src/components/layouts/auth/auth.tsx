import React from "react";
import { Paper } from "@material-ui/core";
import useAuthStyles from "./styles";
import Registration from "../../auth/registration";
import LogIn from "../../auth/log-in";

interface Auth {
    isReg: boolean
}

const AuthLayout = ({ isReg = false }: Auth) => {
    const classes = useAuthStyles();


    return (
        <div className={classes.auth}>
            <div className={classes.authInner}>
                <Paper className={classes.paper} elevation={2}>
                    {isReg
                        ? <LogIn />
                        : <Registration />}
                </Paper>
            </div>
        </div>
    );
};

export default AuthLayout;
