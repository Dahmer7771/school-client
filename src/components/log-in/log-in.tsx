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
import { bindActionCreators, Dispatch } from "redux";
import {
    FormData, UserLoginInfo, LoginProps,
} from "../../types";
import { login as loginAction } from "../../actions";
import useAuthStyles from "./styles";
import { emailErrors, passwordErrors, regExp } from "../../validation";
import withSchoolService from "../hoc/with-school-service";

const LogIn: React.FC<LoginProps> = ({ login }): JSX.Element => {
    const classes = useAuthStyles();
    const {
        register, handleSubmit, errors,
    } = useForm<FormData>();

    const onSubmit = (data: UserLoginInfo) => {
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
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Sign in</Button>
        </form>
    );
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: LoginProps) => bindActionCreators({
    // login: (userInfo: UserLoginInfo) => loginAction(ownProps.schoolService, userInfo)(),
    login: (userInfo: UserLoginInfo) => loginAction(
        ownProps.schoolService,
        userInfo,
    )(),
}, dispatch);

export default withSchoolService()(connect(null, mapDispatchToProps)(LogIn));
