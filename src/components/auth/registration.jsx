import React from "react";
import {
    Button, FormControl, FormHelperText, Input, InputLabel, Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    emailErrors,
    nameErrors,
    passwordErrors,
    passwordConfirmErrors,
    regExp,
} from "../../validation";
import withSchoolService from "../hoc/with-school-service";
import useStyles from "./styles";
import { authActions } from "../../actions/index";

const Registration = ({
    registration, authentication,
}) => {
    const classes = useStyles();
    const {
        register, handleSubmit, watch, errors,
    } = useForm();

    const onSubmit = (data) => {
        const registrationData = {
            email: data.email,
            name: data.name,
            password: data.password,
        };
        registration(registrationData);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" align="center" gutterBottom>
                Sign up
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
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                    name="name"
                    type="text"
                    inputRef={register({ required: true, minLength: 2, pattern: regExp.name })}
                />
                {errors.name
                && (
                    <FormHelperText className={classes.helper} id="email-helper-text">
                        { nameErrors[errors.name.type] }
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
            <FormControl className={classes.input}>
                <InputLabel htmlFor="password-confirm">Confirm password</InputLabel>
                <Input
                    name="passwordConfirm"
                    type="password"
                    inputRef={register({ validate: (value) => value === watch("password") })}
                />
                {errors.passwordConfirm
                && (
                    <FormHelperText className={classes.helper} id="email-helper-text">
                        { passwordConfirmErrors[errors.passwordConfirm.type] }
                    </FormHelperText>
                )}
            </FormControl>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={authentication}
                className={classes.button}
            >
                Sign up
            </Button>
        </form>
    );
};

const mapStateToProps = ({ authReducer: { authentication } }) => ({
    authentication,
});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    registration: (userInfo) => authActions.registration(
        ownProps.schoolService,
        userInfo,
    )(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(Registration));
