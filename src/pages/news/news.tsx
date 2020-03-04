import React from "react";
import { Container } from "@material-ui/core";
import NewsList from "../../components/news";
import useStyles from "./styles";

const News: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <NewsList />
        </Container>
    );
};

export default News;
