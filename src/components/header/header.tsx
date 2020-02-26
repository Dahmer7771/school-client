import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
    useScrollTrigger, CssBaseline,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { ElevationScrollProps } from "../../types";
import { toggleMenu as toggleMenuAction } from "../../actions";
import useHeaderStyles from "./styles";

const AuthLink = () => {
    const history = useHistory();
    const location = useLocation();

    switch (location.pathname) {
    case "/":
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

const ElevationScroll = (props: ElevationScrollProps) => {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

const ElevationHeader = ({ toggleMenu }: any) => {
    const classes = useHeaderStyles();

    return (
        <>
            <CssBaseline />
            <ElevationScroll>
                <AppBar className={classes.header} color="primary" position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            onClick={toggleMenu}
                            className={classes.menuButton}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/">School 13</Link>
                        </Typography>
                        <AuthLink />
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    );
};

const mapDispatchToProps = {
    toggleMenu: toggleMenuAction,
};

export default connect(null, mapDispatchToProps)(ElevationHeader);
