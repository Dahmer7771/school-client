import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextEditor from "../text-editor";
import ArticleTitleInput from "../article-title-input";
import ArticlePictureInsert from "../article-picture-insert";
import useStyles from "./styles";
import articleCreatorActions from "../../actions/article-creator.actions";

const ArticleCreator = ({
    title, setTitle, image, setImage, content, setContent,
}: any) => {
    const classes = useStyles();
    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log("title", title);
        console.log("image", image);
        console.log("content", content);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={classes.flexContainer}>
                <ArticleTitleInput
                    title={title}
                    setTitle={setTitle}
                />
                <ArticlePictureInsert
                    setImage={setImage}
                />
            </div>
            <TextEditor
                content={content}
                setContent={setContent}
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.submit}
            >
                Click
            </Button>
        </form>
    );
};

const mapStateToProps = ({ articleCreatorReducer: { title, image, content } }: any) => ({
    title,
    image,
    content,
});

const mapDispatchToProps = {
    setTitle: (title: string) => articleCreatorActions.setArticleTitle(title),
    setImage: (image: any) => articleCreatorActions.setArticleImage(image),
    setContent: (content: string) => articleCreatorActions.setArticleContent(content),
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreator);
