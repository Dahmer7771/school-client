import React from "react";
import {
    Button, FormControl, FormHelperText, Input, InputLabel, Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import {
    emailErrors,
    nameErrors,
    passwordErrors,
    passwordConfirmErrors,
} from "./validation";
import useAuthStyles from "./styles";

interface FormData {
    email: string,
    name: string,
    password: string,
    passwordConfirm: string
}

const regExp = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^(\d*([a-zA-Z]{1,})\d*)*$/,
    password: /^[A-Za-z0-9]+$/,
};

const Registration: React.FunctionComponent<any> = () => {
    const classes = useAuthStyles();
    const {
        register, handleSubmit, watch, errors,
    } = useForm<FormData>();

    const onSubmit = (data: Record<string, any>) => {
        console.log(data);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" align="center" gutterBottom>
                Login
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
            <Button type="submit" variant="contained" color="primary" className={classes.button}>Log in</Button>
        </form>
    );
};

export default Registration;
