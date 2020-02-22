import React from "react";
import { Paper } from "@material-ui/core";
import useAuthStyles from "./styles";
import Autorization from "./autorization";
import Registration from "./registration";

interface AuthLayout {
    isReg: boolean
}

const AuthLayout = ({ isReg = false }: AuthLayout) => {
    const classes = useAuthStyles();


    return (
        <div className={classes.auth}>
            <div className={classes.authInner}>
                <Paper className={classes.paper} elevation={2}>
                    {isReg
                        ? <Autorization />
                        : <Registration />}
                </Paper>
            </div>
        </div>
    );
};

export default AuthLayout;
