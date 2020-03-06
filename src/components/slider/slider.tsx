import React from "react";
import { Typography } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.scss";

const Slider = () => (
    <div>
        <Typography variant="h4" gutterBottom>
            Gallery
        </Typography>
        <Carousel showStatus={false}>
            <div>
                <img src="./images/1.jpg" alt="logo" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="./images/1.jpg" alt="logo" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="./images/1.jpg" alt="logo" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="./images/logo.png" alt="logo" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </div>
);

export default Slider;
