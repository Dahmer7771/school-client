import React, { useEffect } from "react";
import "typeface-roboto";
import { connect } from "react-redux";
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/header";
import AuthPage from "./pages/auth";
import SideMenu from "./components/side-menu";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import NewsPage from "./pages/articles";
import AdministrationPage from "./pages/administration";
import authActions from "./actions/auth.actions";
import Alert from "./components/alert";
import alertActions from "./actions/alert.actions";
import ArticlePage from "./pages/article";

const App = ({
    checkAuthorization,
    alertOpen,
    alertTitle,
    alertContent,
    alertCb,
    closeAlert,
    confirm,
}: any) => {
    useEffect(() => {
        checkAuthorization();
    }, [checkAuthorization]);

    return (
        <>
            <Header />
            <SideMenu />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/article/:id" component={ArticlePage} />
                <Route path="/login" component={AuthPage} />
                <Route path="/registration" component={AuthPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/posts" component={NewsPage} />
                <Route path="/administration" component={AdministrationPage} />
                <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
            <Alert
                open={alertOpen}
                handleClose={closeAlert}
                title={alertTitle}
                content={alertContent}
                cb={alertCb}
                confirm={confirm}
            />
        </>
    );
};

const mapStateToProps = ({
    alertReducer: {
        alertOpen, alertTitle, alertContent, alertCb, confirm,
    },
}: any) => ({
    alertOpen,
    alertTitle,
    alertContent,
    alertCb,
    confirm,
});

const mapDispatchToProps = {
    checkAuthorization: () => authActions.checkAuthorization(),
    closeAlert: () => alertActions.closeAlert(),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
