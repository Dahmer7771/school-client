import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles";
import Slider from "../../components/slider";
import ArticlesSection from "../../components/articles-section";

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Slider />
            <ArticlesSection isLimited limit={3} />
        </Container>
    );
};

export default Home;
