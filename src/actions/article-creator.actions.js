const setArticleTitle = (title) => ({
    type: "SET_ARTICLE_TITLE",
    payload: {
        title,
    },
});

const setArticleImage = (image) => ({
    type: "SET_ARTICLE_IMAGE",
    payload: {
        image,
    },
});

const setArticleContent = (content) => ({
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
