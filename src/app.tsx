import React from "react";
import "typeface-roboto";
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/header";
import AuthPage from "./pages/auth";
import SideMenu from "./components/side-menu";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import NewsPage from "./pages/news";
import AdministrationPage from "./pages/administration";

const App = () => (
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

export default App;
