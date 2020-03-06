import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles";
import Slider from "../../components/slider";
import ArticlesSection from "../../components/articles-section";

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Slider />
            <ArticlesSection />
        </Container>
    );
};

export default Home;
