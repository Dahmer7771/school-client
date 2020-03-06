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

const App = ({ checkAuthorization }: any) => {
    useEffect(() => {
        checkAuthorization();
    }, [checkAuthorization]);

    return (
        <>
            <Header />
            <SideMenu />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={AuthPage} />
                <Route path="/registration" component={AuthPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/posts" component={NewsPage} />
                <Route path="/administration" component={AdministrationPage} />
                <Route render={() => <h1>404 Not Found</h1>} />
            </Switch>
        </>
    );
};

const mapDispatchToProps = {
    checkAuthorization: () => authActions.checkAuthorization(),
};

export default connect(null, mapDispatchToProps)(App);
