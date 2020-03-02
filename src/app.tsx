import React from "react";
import "typeface-roboto";
import {
    Switch,
    Route,
} from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./components/header";
import AuthPage from "./pages/auth";
import SideMenu from "./components/side-menu";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import News from "./components/news";

const App = () => (
    <>
        <Header />
        <SideMenu />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={AuthPage} />
            <Route path="/registration" component={AuthPage} />
            <Route path="/profile" component={ProfilePage} />
            <Container style={{ paddingTop: "16px" }}>
                <Route path="/posts" component={News} />
            </Container>
        </Switch>
    </>
);

export default App;
