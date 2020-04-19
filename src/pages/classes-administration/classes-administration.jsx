import React from "react";
import { Container } from "@material-ui/core";
import ClassList from "../../components/class-list";
import ClassEditor from "../../components/class-editor/class-editor";
import useStyles from "./styles";

const ClassesAdministration = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <ClassList />
            <ClassEditor />
        </Container>
    );
};

export default ClassesAdministration;
