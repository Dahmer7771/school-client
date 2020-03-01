import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) => (
            localStorage.getItem("school-user-with-jwt")
                ? <Component {...props} />
                : <Redirect to="/" />
        )}
    />
);

export default PrivateRoute;
