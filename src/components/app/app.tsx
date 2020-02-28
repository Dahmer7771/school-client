import React from "react";
import "typeface-roboto";
import {
    Switch,
    Route,
} from "react-router-dom";
import ElevationHeader from "../header";
import AuthLayout from "../layouts/auth/index";
import SideMenu from "../side-menu";
import Slider from "../slider";
import MainLayout from "../layouts/main/main";
import Profile from "../layouts/profile/profile";
import News from "../news/news";

const App = () => (
    <>
        <ElevationHeader />
        <SideMenu />
        <Switch>
            <Route path="/login" component={() => <AuthLayout isReg />} />
            <Route path="/registration" component={AuthLayout} />
            <Route path="/profile" component={Profile} />
            <MainLayout>
                <Route path="/posts" component={News} />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <>
                            <Slider />
                            <News />
                        </>
                    )}
                />
            </MainLayout>
        </Switch>
    </>
);

export default App;
