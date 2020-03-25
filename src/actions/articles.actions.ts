import { Dispatch } from "redux";
import {
    Action, SchoolService,
} from "../types";

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
) => () => async (dispatch: Dispatch) => {
    dispatch(getAllArticlesRequest());
    try {
        const responseData = await schoolService.getAllArticles(skip, limit);
        dispatch(getAllArticlesSuccess(responseData));
    } catch (e) {
        dispatch(getAllArticlesError(e.message));
    }
};

// const getArticleById = (
//     schoolService: SchoolService,
// ) => () => (dispatch: Dispatch) => {
//
// };
//

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
    formRef: any,
) => () => async (dispatch: Dispatch) => {
    try {
        await schoolService.createArticle(formRef);
        dispatch(createArticleSuccess());
    } catch (e) {
        dispatch(createArticleError(e));
    }
};
//
// const updateArticle = (
//     schoolService: SchoolService,
// ) => () => (dispatch: Dispatch) => {
//
// };
//
// const deleteArticle = (
//     schoolService: SchoolService,
// ) => () => (dispatch: Dispatch) => {
//
// };

const articlesActions = {
    getAllArticles,
    createArticle,
};

export default articlesActions;
