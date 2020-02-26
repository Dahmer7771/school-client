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

const App = () => (
    <>
        <ElevationHeader />
        <SideMenu />
        <Switch>
            <Route path="/login" component={() => <AuthLayout isReg />} />
            <Route path="/registration" component={AuthLayout} />
            <Route render={() => (
                <Main>
                    <Slider />
                </Main>
            )}
            />
        </Switch>
    </>
);

export default App;
