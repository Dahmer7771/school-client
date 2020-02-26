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
import Main from "../layouts/main/main";
import News from "../news/news";

const App = () => (
    <>
        <ElevationHeader />
        <SideMenu />
        <Main>
            <Switch>
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
                <Route path="/login" component={() => <AuthLayout isReg />} />
                <Route path="/registration" component={AuthLayout} />
            </Switch>
        </Main>
    </>
);

export default App;
