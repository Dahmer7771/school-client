import React from "react";
import "typeface-roboto";
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from "../header";
import AuthLayout from "../auth-layout";

const App = () => (
    <>
        <Header />
        <Switch>
            <Route exact path="/" component={AuthLayout} />
        </Switch>
    </>
);

export default App;
