import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles";

const Main: React.FC = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {children}
        </Container>
    );
};

export default Main;
