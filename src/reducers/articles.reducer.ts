import { ArticlesReducerState } from "../types";

const initialState = {
    articles: [],
    currentArticle: null,
    articlesError: false,
    articlesMessage: "",
};

const articlesReducer = (state: ArticlesReducerState = initialState, action: any) => {
    switch (action.type) {
    case "GET_ARTICLES_REQUEST":
        return { ...state, articlesError: false, articles: [] };
    case "GET_ARTICLES_ERROR":
        return { ...state, articlesError: true, message: action.payload.message };
    case "GET_ARTICLES_SUCCESS":
        return { ...state, articlesError: false, articles: action.payload.articles };
    default:
        return state;
    }
};

export default articlesReducer;
