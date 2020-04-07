// eslint-disable-next-line import/no-cycle
import { authActions } from "./index";

const getAllArticlesRequest = () => ({
    type: "GET_ARTICLES_REQUEST",
});

const getAllArticlesSuccess = (articles) => ({
    type: "GET_ARTICLES_SUCCESS",
    payload: {
        articles,
    },
});

const getAllArticlesError = (message) => ({
    type: "GET_ARTICLES_ERROR",
    payload: {
        message,
    },
});

const getAllArticles = (
    schoolService,
    skip,
    limit,
    term,
) => () => async (dispatch) => {
    dispatch(getAllArticlesRequest());
    try {
        const responseData = await schoolService.getAllArticles(skip, limit, term);
        dispatch(getAllArticlesSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(getAllArticlesError(e.message));
    }
};

const getArticleByIdSuccess = (article) => ({
    type: "GET_ARTICLE_BY_ID_SUCCESS",
    payload: {
        article,
    },
});

const getArticleByIdError = (message) => ({
    type: "GET_ARTICLE_BY_ID_ERROR",
    payload: {
        message,
    },
});

const getArticleById = (
    schoolService,
    id,
) => () => async (dispatch) => {
    try {
        const responseData = await schoolService.getArticleById(id);
        dispatch(getArticleByIdSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(getArticleByIdError(e.message));
    }
};

const updateOrCreateArticleSuccess = () => ({
    type: "UPDATE_OR_CREATE_ARTICLE_SUCCESS",
});

const updateOrCreateArticleError = (updateOrCreateMessage) => ({
    type: "UPDATE_OR_CREATE_ARTICLE_ERROR",
    payload: {
        updateOrCreateMessage,
    },
});

const clearUpdateAndCreateError = () => ({
    type: "CLEAR_UPDATE_AND_CREATE_ERROR",
});

const createArticle = (
    schoolService,
    data,
) => () => async (dispatch) => {
    try {
        await schoolService.createArticle(data);
        dispatch(updateOrCreateArticleSuccess());
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(updateOrCreateArticleError(e.message));
    }
};

const updateArticle = (
    schoolService,
    id,
    data,
) => () => async (dispatch) => {
    try {
        await schoolService.updateArticle(id, data);
        dispatch(updateOrCreateArticleSuccess());
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(updateOrCreateArticleError(e.message));
    }
};

const deleteArticleError = (message) => ({
    type: "DELETE_MESSAGE_ERROR",
    payload: {
        message,
    },
});

const deleteArticle = (
    schoolService,
    id,
) => () => async (dispatch) => {
    try {
        await schoolService.deleteArticle(id);
        const responseData = await schoolService.getAllArticles(0, 0, "");
        dispatch(getAllArticlesSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        deleteArticleError(e.message);
    }
};

const setArticlesTerm = (term) => ({
    type: "SET_ARTICLES_TERM",
    payload: {
        term,
    },
});

const setArticleEditing = (editing, id) => ({
    type: "SET_ARTICLE_EDITING",
    payload: {
        editing,
        id,
    },
});

const setUpdate = () => ({
    type: "SET_UPDATE",
});

const setCreate = () => ({
    type: "SET_CREATE",
});

const clearCurrentArticle = () => ({
    type: "CLEAR_CURRENT_ARTICLE",
});

const articlesActions = {
    getAllArticles,
    createArticle,
    setArticlesTerm,
    deleteArticle,
    setArticleEditing,
    getArticleById,
    updateArticle,
    setUpdate,
    setCreate,
    clearCurrentArticle,
    clearUpdateAndCreateError,
};

export default articlesActions;
