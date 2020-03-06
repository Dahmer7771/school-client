import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Registration from "../../components/auth/registration";
import LogIn from "../../components/auth/log-in";
import ModalWindow from "../../components/modal-window/modal-window";
import { AuthLayoutProps } from "../../types";
import authActions from "../../actions/auth.actions";
import useAuthStyles from "./styles";

const AuthLayout = ({ authError, errorMessage, clearAuthError }: AuthLayoutProps) => {
    const classes = useAuthStyles();
    const location = useLocation();

    console.log(errorMessage);

    return (
        <>
            <div className={classes.auth}>
                <div className={classes.authInner}>
                    <Paper className={classes.paper} elevation={2}>
                        {location.pathname === "/login"
                            ? <LogIn />
                            : <Registration />}
                    </Paper>
                </div>
            </div>
            <ModalWindow close={clearAuthError} isModalOpen={authError} title="Проблемка...." text={errorMessage} />
        </>
    );
};

const mapStateToProps = ({ authReducer: { authError, errorMessage } }: any) => ({
    authError,
    errorMessage,
});

const mapDispatchToProps = {
    clearAuthError: authActions.clearAuthError,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
