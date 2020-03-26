import React from "react";
import {
    Avatar, Card, CardContent, CardHeader, CardMedia, Typography,
} from "@material-ui/core";
import { PostProps } from "../../types";
import useStyles from "./styles";

const Post = ({
    title, date, authorFirstChar, author, text, image,
}: PostProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardHeader
                    avatar={(
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {authorFirstChar}
                        </Avatar>
                    )}
                    title={author}
                    subheader={date}
                />
                <CardMedia
                    className={classes.media}
                    src={image}
                    title="Paella dish"
                />
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Новини
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
