import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useHeaderStyles from "./styles";

const AuthLinkButton = () => {
    const history = useHistory();
    const location = useLocation();

    switch (location.pathname) {
    case "/login":
        return (
            <Button onClick={() => history.push("/registration")} color="inherit">Sign up</Button>
        );
    case "/registration":
        return (
            <Button onClick={() => history.push("/login")} color="inherit">Sign in</Button>
        );
    default:
        return null;
    }
};

const Header = () => {
    const classes = useHeaderStyles();

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/">School 13</Link>
                </Typography>
                <AuthLinkButton />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
