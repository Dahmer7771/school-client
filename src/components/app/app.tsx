import React from "react";
import "typeface-roboto";
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from "../header";
import AuthLayout from "../layouts/auth/index";

const App = () => (
    <>
        <Header />
        <Switch>
            <Route path="/login" component={() => <AuthLayout isReg />} />
            <Route path="/registration" component={AuthLayout} />
        </Switch>
    </>
);

export default App;
