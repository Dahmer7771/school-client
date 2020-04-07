import React from "react";
import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "../../actions/index";
import { emailErrors, passwordErrors, regExp } from "../../validation";
import withSchoolService from "../hoc/with-school-service";
import useStyles from "./styles";

const LogIn = ({ login, authentication }) => {
    const classes = useStyles();

    const {
        register, handleSubmit, errors,
    } = useForm();

    const onSubmit = (data) => {
        login(data);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" align="center" gutterBottom>
                Sign in
            </Typography>
            <FormControl className={classes.email}>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                    name="email"
                    type="email"
                    inputRef={register({ required: true, pattern: regExp.email })}
                />
                {errors.email
                    && (
                        <FormHelperText className={classes.helper} id="email-helper-text">
                            { emailErrors[errors.email.type] }
                        </FormHelperText>
                    )}
            </FormControl>
            <FormControl className={classes.input}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                    name="password"
                    type="password"
                    inputRef={register({ required: true, minLength: 6, pattern: regExp.password })}
                />
                {errors.password
                    && (
                        <FormHelperText className={classes.helper} id="email-helper-text">
                            { passwordErrors[errors.password.type] }
                        </FormHelperText>
                    )}
            </FormControl>
            <Button
                disabled={authentication}
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Sign in
            </Button>
        </form>
    );
};

const mapStateToProps = ({ authReducer: { authentication } }) => ({
    authentication,
});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    login: (userInfo) => authActions.login(
        ownProps.schoolService,
        userInfo,
    )(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(LogIn));
