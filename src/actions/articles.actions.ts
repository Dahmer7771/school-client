import { Dispatch } from "redux";
import {
    Action, SchoolService,
} from "../types";

const getAllArticlesRequest = (): Action => ({
    type: "ARTICLES_REQUEST",
});

const getAllArticlesSuccess = (articles: any): Action => ({
    type: "ARTICLES_SUCCESS",
    payload: {
        articles,
    },
});

const getAllArticlesError = (message: string): Action => ({
    type: "ARTICLES_ERROR",
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
// const createArticle = (
//     schoolService: SchoolService,
// ) => () => (dispatch: Dispatch) => {
//
// };
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
};

export default articlesActions;
