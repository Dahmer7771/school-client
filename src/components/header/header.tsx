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
import { ElevationHeaderProps, ElevationScrollProps } from "../../types";
import { menuActions } from "../../actions";
import useStyles from "./styles";
import LogoutButton from "../logout-button/logout-button";

const AuthButton = () => {
    const history = useHistory();
    const location = useLocation();

    switch (location.pathname) {
    case "/login":
        return (
            <Button onClick={() => history.push("/registration")} color="inherit">Регистрация</Button>
        );
    default:
        return (
            <Button onClick={() => history.push("/login")} color="inherit">Войти</Button>
        );
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

const ElevationHeader = ({ showMenu, isAuth }: ElevationHeaderProps) => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <ElevationScroll>
                <AppBar className={classes.header} color="primary" position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            onClick={() => showMenu()}
                            className={classes.menuButton}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.headerTitleWrapper}>
                            <img onClick={() => history.push("/")} className={classes.logo} alt="logo" src="./images/logo.png" />
                            <Typography variant="h6" className={classes.title}>
                                <Link to="/">
                                    Konotop gymnasium
                                </Link>
                            </Typography>
                        </div>
                        {isAuth ? <LogoutButton /> : <AuthButton />}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    );
};

const mapStateToProps = ({ authReducer: { isAuth } }: any) => ({
    isAuth,
});

const mapDispatchToProps = {
    showMenu: menuActions.showMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(ElevationHeader);
