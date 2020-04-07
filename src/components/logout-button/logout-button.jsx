import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import authActions from "../../actions/auth.actions";

const LogoutButton = ({ logout }) => {
    const history = useHistory();

    const clickHandler = () => {
        history.push("/");
        logout();
    };

    return <Button onClick={clickHandler} color="inherit">Выйти</Button>;
};

const mapDispatchToProps = {
    logout: authActions.logout,
};

export default connect(null, mapDispatchToProps)(LogoutButton);
