import React from "react";
import {
    Paper,
    Typography,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Button,
} from "@material-ui/core";
import useAuthStyles from "./styles";

const AuthLayout = () => {
    const classes = useAuthStyles();

    return (
        <div className={classes.auth}>
            <div className={classes.authInner}>
                <Paper className={classes.paper} elevation={2}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>
                    <FormControl className={classes.email}>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input aria-describedby="email-helper-text" />
                        <FormHelperText className={classes.emailHelper} id="email-helper-text">
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>
                    <FormControl className={classes.input}>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.input}>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl className={classes.input}>
                        <InputLabel htmlFor="my-input">Confirm password</InputLabel>
                        <Input aria-describedby="my-helper-text" />
                    </FormControl>
                    <Button variant="contained" color="primary" className={classes.button}>Log in</Button>
                </Paper>
            </div>
        </div>
    );
};

export default AuthLayout;
