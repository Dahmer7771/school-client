import React, { useEffect } from "react";
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
    title,
    setTitle,
    image,
    setImage,
    content,
    setContent,
    createArticle,
    updateArticle,
    getArticleById,
    editingArticleId,
    currentArticle,
    editing,
}: any) => {
    const classes = useStyles();

    useEffect(() => {
        if (editingArticleId && currentArticle === null) {
            getArticleById(editingArticleId);
        }
        if (editingArticleId && currentArticle) {
            setTitle(currentArticle.title);
            setImage(currentArticle.image);
            setContent(currentArticle.content);
        }
    }, [currentArticle, editingArticleId, setTitle, setImage, setContent, getArticleById]);

    const onSubmit = (e: any) => {
        e.preventDefault();
        const data: any = new FormData();
        data.append("title", title);
        data.append("content", content);
        if (image) data.append("image", image, "image");
        console.log(currentArticle);
        if (editing) updateArticle(currentArticle._id, data);
        else createArticle(data);
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

            {editing && content && (
                <TextEditor
                    content={content}
                    setContent={setContent}
                />
            )}

            {!editing && (
                <TextEditor
                    content={content}
                    setContent={setContent}
                />
            )}

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

const mapStateToProps = ({
    articleCreatorReducer: { title, image, content },
    articlesReducer: { currentArticle, editingArticleId, editing },
}: any) => ({
    title,
    image,
    content,
    currentArticle,
    editingArticleId,
    editing,
});

const mapDispatchToProps = (dispatch: Dispatch, { schoolService }: any) => bindActionCreators({
    createArticle: (data: any) => articlesActions.createArticle(schoolService, data)(),
    updateArticle: (
        id: string,
        data: any,
    ) => articlesActions.updateArticle(schoolService, id, data)(),
    setTitle: (title: string) => articleCreatorActions.setArticleTitle(title),
    setImage: (image: any) => articleCreatorActions.setArticleImage(image),
    setContent: (content: string) => articleCreatorActions.setArticleContent(content),
    getArticleById: (id: string) => articlesActions.getArticleById(schoolService, id)(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ArticleCreator));
