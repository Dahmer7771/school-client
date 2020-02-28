import React from "react";
import {
    Avatar, Card, CardContent, CardHeader, CardMedia, Typography,
} from "@material-ui/core";
import { PostProps } from "../../types";
import usePostStyles from "./styles";

const Post = ({
    id, title, date, authorFirstChar, author, text, image,
}: PostProps) => {
    const classes = usePostStyles();

    return (
        <Card key={id} className={classes.root}>
            <div className={classes.details}>
                <CardHeader
                    avatar={(
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {authorFirstChar}
                        </Avatar>
                    )}
                    title="Shrimp and Chorizo Paella"
                    subheader={date}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Paella dish"
                />
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {author}
                    </Typography>
                    <Typography className={classes.cardText} variant="body2" color="textPrimary" component="p">
                        {text}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default Post;
