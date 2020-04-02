import React from "react";
import { useHistory } from "react-router-dom";
import {
    Avatar, Card, CardContent, CardHeader, CardMedia, Typography, CardActionArea,
} from "@material-ui/core";
import { PostProps } from "../../types";
import useStyles from "./styles";

const ArticleCard = ({
    _id, title, date, authorFirstChar, author, content, image,
}: PostProps) => {
    const classes = useStyles();
    const history = useHistory();
    const imagePath = image.replace("\\", "/");

    const makeContentPreview = (text: string) => {
        const lastBracer = text.indexOf(">");
        let tag = "";
        for (let i = 1; i < lastBracer + 1; i++) {
            if (text[i] !== " ") tag += text[i];
            else break;
        }

        const regExp = `<${tag}\\s[^>]*[\\"a-zA-Z0-9:.&_\\/,;=-]*>(\\s*?.*\\s*?)<\\/${tag}>`;
        const result = text.match(regExp);
        if (result) return result[0];
    };
    const contentPreview = makeContentPreview(content) || "";

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardActionArea onClick={() => history.push(`/article/${_id}`)}>
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
                        image={`${window.origin}/${imagePath}`}
                        title="Paella dish"
                    />
                </CardActionArea>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Новини
                    </Typography>
                    <Typography
                        dangerouslySetInnerHTML={{ __html: contentPreview }}
                        className={classes.cardText}
                        variant="body2"
                        color="textPrimary"
                        component="p"
                    />
                </CardContent>
            </div>
        </Card>
    );
};

export default ArticleCard;
