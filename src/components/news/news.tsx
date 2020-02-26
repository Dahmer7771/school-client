import React from "react";
import {
    Typography, Card, CardContent, CardMedia, CardHeader, Avatar, Divider,
} from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ title, date, user, author, text }: any) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardHeader
                    avatar={(
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    )}
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        This impressive paella is a perfect party
                        dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                image="./images/logo.png"
                title="Live from space album cover"
            />
        </Card>
    );
};

const News = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Посты
            </Typography>
            <Divider className={classes.divider} />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default News;
