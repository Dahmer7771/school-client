import { ArticlesReducerState } from "../types";

const initialState = {
    articles: [],
    currentArticle: null,
    articlesError: false,
    articlesMessage: "",
};

const articlesReducer = (state: ArticlesReducerState = initialState, action: any) => {
    switch (action.type) {
    case "ARTICLES_REQUEST":
        return { ...state, articlesError: false, articles: [] };
    case "ARTICLES_ERROR":
        return { ...state, articlesError: true, ...action.payload.message };
    case "ARTICLES_SUCCESS":
        return { ...state, articlesError: false, articles: action.payload.articles };
    default:
        return state;
    }
};

export default articlesReducer;
