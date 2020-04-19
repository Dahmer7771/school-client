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
import ArticlesAdministrationPage from "./pages/articles-administration";
import ClassesAdministrationPage from "./pages/classes-administration";
import UsersAdministrationPage from "./pages/users-administration";
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
}) => {
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
                <Route path="/users-editing" component={UsersAdministrationPage} />
                <Route path="/articles-editing" component={ArticlesAdministrationPage} />
                <Route path="/classes-editing" component={ClassesAdministrationPage} />
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
}) => ({
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
