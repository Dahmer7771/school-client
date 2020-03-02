import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles";
import Slider from "../../components/slider";
import News from "../../components/news";

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Slider />
            <News />
        </Container>
    );
};

export default Home;
