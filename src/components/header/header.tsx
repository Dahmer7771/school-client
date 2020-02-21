import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useHeaderStyles from "./styles";

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
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
