import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { bindActionCreators, Dispatch } from "redux";
import CloseIcon from "@material-ui/icons/Close";
import TextEditor from "../text-editor";
import ArticleTitleInput from "../article-title-input";
import ArticlePictureInsert from "../article-picture-insert";
import articleCreatorActions from "../../actions/article-creator.actions";
import articlesActions from "../../actions/articles.actions";
import withSchoolService from "../hoc/with-school-service";
import Spinner from "../spinner/spinner";
import useStyles from "./styles";
import dialogWindowActions from "../../actions/dialog-window.actions";

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
    openDialogWindow,
    updateOrCreateError,
    clearUpdateAndCreateError,
    updateOrCreateMessage,
}: any) => {
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
            openDialogWindow(
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

    const onSubmit = (e: any) => {
        e.preventDefault();
        const data: any = new FormData();
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
                        openDialogWindow(
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
}: any) => ({
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
    setArticleEditing: (editing: boolean) => articlesActions.setArticleEditing(editing),
    clearCurrentArticle: () => articlesActions.clearCurrentArticle(),
    openDialogWindow: (
        title: string,
        content: string,
        cb: any,
        confirm: boolean,
    ) => dialogWindowActions.openDialogWindow(title, content, cb, confirm),
    clearUpdateAndCreateError: () => articlesActions.clearUpdateAndCreateError(),
}, dispatch);

export default withSchoolService()(connect(mapStateToProps, mapDispatchToProps)(ArticleCreator));
