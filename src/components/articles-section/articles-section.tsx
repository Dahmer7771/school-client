import React from "react";
import {
    Typography, Divider, Grid,
} from "@material-ui/core";
import useNewsStyles from "./styles";
import Post from "../post/post";

const ArticlesSection = () => {
    const classes = useNewsStyles();
    const date = new Date();
    const postTemplate = {
        id: Math.random(),
        title: "Post title",
        image: "./images/1.jpg",
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        authorFirstChar: "Mac Miller"[0].toUpperCase(),
        author: "Mac Miller",
        text: "This impressive paella is a perfect party\n"
            + "dish and a fun meal to cook together with your\n"
            + "guests. Add 1 cup of frozen peas along with the mussels, if you like.\n"
            + "This impressive paella is a perfect party\n"
            + "dish and a fun meal to cook together with your\n"
            + "guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    };

    const posts = new Array(10).fill(postTemplate);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Посты
            </Typography>
            <Divider className={classes.divider} />
            <div>
                <Grid container spacing={3}>
                    {posts.map((post) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Post {...post} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default ArticlesSection;
