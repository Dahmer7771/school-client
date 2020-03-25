import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { bindActionCreators, Dispatch } from "redux";
import TextEditor from "../text-editor";
import ArticleTitleInput from "../article-title-input";
import ArticlePictureInsert from "../article-picture-insert";
import useStyles from "./styles";
import articleCreatorActions from "../../actions/article-creator.actions";
import articlesActions from "../../actions/articles.actions";
import withSchoolService from "../hoc/with-school-service";

const ArticleCreator = ({
    title, setTitle, image, setImage, content, setContent, createArticle,
}: any) => {
    const classes = useStyles();
    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log("title", title);
        console.log("image", image);
        console.log("content", content);
        const data: any = new FormData();
        data.append("title", title);
        data.append("image", image, "image");
        data.append("content", content);
        // const data: any = {
        //     title,
        //     image,
        //     content,
        // };
        console.log(data);
        createArticle(data);
    };

    return (
        <form id="create-article-form" onSubmit={onSubmit}>
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

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    createArticle: (data:any) => articlesActions.createArticle(schoolService, data)(),
    setTitle: (title: string) => articleCreatorActions.setArticleTitle(title),
    setImage: (image: any) => articleCreatorActions.setArticleImage(image),
    setContent: (content: string) => articleCreatorActions.setArticleContent(content),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ArticleCreator));
