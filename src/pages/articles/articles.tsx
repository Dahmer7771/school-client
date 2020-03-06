import React from "react";
import { Container } from "@material-ui/core";
import ArticlesSection from "../../components/articles-section";
import useStyles from "./styles";

const Articles: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <ArticlesSection />
        </Container>
    );
};

export default Articles;
