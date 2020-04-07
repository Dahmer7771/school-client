import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import CloseIcon from "@material-ui/icons/Close";
import TextEditor from "../text-editor";
import ArticleTitleInput from "../article-title-input";
import ArticlePictureInsert from "../article-picture-insert";
import articleCreatorActions from "../../actions/article-creator.actions";
import articlesActions from "../../actions/articles.actions";
import withSchoolService from "../hoc/with-school-service";
import Spinner from "../spinner/spinner";
import useStyles from "./styles";
import alertActions from "../../actions/alert.actions";

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
    clearCurrentArticle,
    setArticleEditing,
    create,
    update,
    openAlert,
    updateOrCreateError,
    clearUpdateAndCreateError,
    updateOrCreateMessage,
}) => {
    const classes = useStyles();
    const onClose = () => {
        setArticleEditing(false);
        setTitle("");
        setImage(null);
        setContent("");
        clearCurrentArticle();
        clearUpdateAndCreateError();
    };

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

    useEffect(() => {
        if (updateOrCreateError) {
            openAlert(
                "Error",
                `${updateOrCreateMessage}`,
                () => clearUpdateAndCreateError(),
                true,
            );
        }
        if (updateOrCreateError === false) {
            onClose();
        }
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", title);
        data.append("content", content);
        if (image) data.append("image", image);
        if (update) updateArticle(currentArticle._id, data);
        if (create) createArticle(data);
    };

    if (update && !content) return <Spinner />;

    return (
        <>
            <div className={classes.closeButton}>
                <Button
                    onClick={() => {
                        openAlert(
                            "Сonfirm closing form",
                            "Do you want to close?",
                            onClose,
                        );
                    }}
                >
                    <CloseIcon />
                </Button>
            </div>
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
                    {update ? "Update" : "Create"}
                </Button>
            </form>
        </>
    );
};

const mapStateToProps = ({
    articleCreatorReducer: { title, image, content },
    articlesReducer: {
        currentArticle,
        editingArticleId,
        editing,
        create,
        update,
        updateOrCreateError,
        updateOrCreateMessage,
    },
}) => ({
    title,
    image,
    content,
    currentArticle,
    editingArticleId,
    editing,
    create,
    update,
    updateOrCreateError,
    updateOrCreateMessage,
});

const mapDispatchToProps = (dispatch, { schoolService }) => bindActionCreators({
    createArticle: (data) => articlesActions.createArticle(schoolService, data)(),
    updateArticle: (
        id,
        data,
    ) => articlesActions.updateArticle(schoolService, id, data)(),
    setTitle: (title) => articleCreatorActions.setArticleTitle(title),
    setImage: (image) => articleCreatorActions.setArticleImage(image),
    setContent: (content) => articleCreatorActions.setArticleContent(content),
    getArticleById: (id) => articlesActions.getArticleById(schoolService, id)(),
    setArticleEditing: (editing) => articlesActions.setArticleEditing(editing),
    clearCurrentArticle: () => articlesActions.clearCurrentArticle(),
    openAlert: (
        title,
        content,
        cb,
        confirm,
    ) => alertActions.openAlert(title, content, cb, confirm),
    clearUpdateAndCreateError: () => articlesActions.clearUpdateAndCreateError(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ArticleCreator));
