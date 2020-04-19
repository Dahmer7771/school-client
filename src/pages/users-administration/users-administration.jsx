import React from "react";
import { Container } from "@material-ui/core";
import UsersSearchPanel from "../../components/users-search-panel";
import UsersList from "../../components/users-list";
import useStyles from "./styles";

const UsersAdministration = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <UsersSearchPanel />
            <UsersList />
        </Container>
    );
};

export default UsersAdministration;
