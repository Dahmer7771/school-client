import {
    Action,
} from "../types";

const setArticleTitle = (title: string): Action => ({
    type: "SET_ARTICLE_TITLE",
    payload: {
        title,
    },
});

const setArticleImage = (image: any): Action => ({
    type: "SET_ARTICLE_IMAGE",
    payload: {
        image,
    },
});

const setArticleContent = (content: string): Action => ({
    type: "SET_ARTICLE_CONTENT",
    payload: {
        content,
    },
});

const articleCreatorActions = {
    setArticleTitle,
    setArticleImage,
    setArticleContent,
};

export default articleCreatorActions;
