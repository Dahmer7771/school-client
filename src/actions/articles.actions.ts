import { Dispatch } from "redux";
import {
    Action, SchoolService,
} from "../types";
import { authActions } from "./index";

const getAllArticlesRequest = (): Action => ({
    type: "GET_ARTICLES_REQUEST",
});

const getAllArticlesSuccess = (articles: any): Action => ({
    type: "GET_ARTICLES_SUCCESS",
    payload: {
        articles,
    },
});

const getAllArticlesError = (message: string): Action => ({
    type: "GET_ARTICLES_ERROR",
    payload: {
        message,
    },
});

const getAllArticles = (
    schoolService: SchoolService,
    skip: number,
    limit: number,
    term?: string,
) => () => async (dispatch: Dispatch) => {
    dispatch(getAllArticlesRequest());
    try {
        const responseData = await schoolService.getAllArticles(skip, limit, term);
        dispatch(getAllArticlesSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(getAllArticlesError(e.message));
    }
};

const getArticleByIdSuccess = (article: any) => ({
    type: "GET_ARTICLE_BY_ID_SUCCESS",
    payload: {
        article,
    },
});

const getArticleByIdError = (message: string) => ({
    type: "GET_ARTICLE_BY_ID_ERROR",
    payload: {
        message,
    },
});

const getArticleById = (
    schoolService: SchoolService,
    id: string,
) => () => async (dispatch: Dispatch) => {
    try {
        const responseData = await schoolService.getArticleById(id);
        dispatch(getArticleByIdSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(getArticleByIdError(e.message));
    }
};

const createArticleSuccess = () => ({
    type: "CREATE_ARTICLE_SUCCESS",
});

const createArticleError = (message: string) => ({
    type: "GET_ARTICLES_ERROR",
    payload: {
        message,
    },
});

const createArticle = (
    schoolService: SchoolService,
    data: any,
) => () => async (dispatch: Dispatch) => {
    try {
        await schoolService.createArticle(data);
        dispatch(createArticleSuccess());
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(createArticleError(e.message));
    }
};

const updateArticle = (
    schoolService: SchoolService,
    id: string,
    data: any,
) => () => async (dispatch: Dispatch) => {
    try {
        await schoolService.updateArticle(id, data);
        dispatch(createArticleSuccess());
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        dispatch(createArticleError(e.message));
    }
};

const deleteArticleError = (message: string) => ({
    type: "DELETE_MESSAGE_ERROR",
    payload: {
        message,
    },
});

const deleteArticle = (
    schoolService: SchoolService,
    id: string,
) => () => async (dispatch: Dispatch) => {
    try {
        await schoolService.deleteArticle(id);
        const responseData = await schoolService.getAllArticles(0, 0, "");
        dispatch(getAllArticlesSuccess(responseData));
    } catch (e) {
        if (e.status === 401) authActions.logout()(dispatch);
        deleteArticleError(e.message);
    }
};

const setArticlesTerm = (term: string) => ({
    type: "SET_ARTICLES_TERM",
    payload: {
        term,
    },
});

const setArticleEditing = (editing: boolean, id?: string) => ({
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
};

export default articlesActions;
