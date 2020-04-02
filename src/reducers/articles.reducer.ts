const initialState = {
    articles: [],
    currentArticle: null,
    articlesError: false,
    articlesMessage: "",
    term: "",
    deleteErrorMessage: "",
    editing: false,
    editingArticleId: null,
    articleByIdError: false,
    articleByIdMessage: "",
    update: false,
    create: false,
    updateOrCreateError: null,
    updateOrCreateMessage: "",
};

const setArticleEditing = (state: any, action: any) => {
    if (action.payload.editing) {
        return {
            ...state,
            editing: action.payload.editing,
            editingArticleId: action.payload.id,
        };
    }
    return {
        ...state,
        editing: false,
        editingArticleId: null,
        update: false,
        create: false,
    };
};

const articlesReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
    case "GET_ARTICLES_REQUEST":
        return {
            ...state,
            articlesError: false,
            articles: [],
            loading: true,
        };
    case "GET_ARTICLES_ERROR":
        return {
            ...state,
            articlesError: true,
            message: action.payload.message,
            loading: false,
        };
    case "GET_ARTICLES_SUCCESS":
        return {
            ...state,
            articlesError: false,
            articles: action.payload.articles,
            loading: false,
        };
    case "SET_ARTICLES_TERM":
        return {
            ...state,
            term: action.payload.term,
        };
    case "DELETE_MESSAGE_ERROR":
        return {
            ...state,
            deleteErrorMessage: action.payload.message,
        };
    case "SET_ARTICLE_EDITING":
        return setArticleEditing(state, action);
    case "GET_ARTICLE_BY_ID_SUCCESS":
        return {
            ...state,
            articleByIdError: false,
            currentArticle: action.payload.article,
        };
    case "GET_ARTICLE_BY_ID_ERROR":
        return {
            ...state,
            articleByIdError: true,
            articleByIdMessage: action.payload.message,
        };
    case "SET_UPDATE":
        return {
            ...state,
            update: true,
            create: false,
            operationSuccess: null,
        };
    case "SET_CREATE":
        return {
            ...state,
            update: false,
            create: true,
            operationSuccess: null,
        };
    case "CLEAR_CURRENT_ARTICLE":
        return {
            ...state,
            currentArticle: null,
        };
    case "UPDATE_OR_CREATE_ARTICLE_SUCCESS":
        return {
            ...state,
            updateOrCreateError: false,
            updateOrCreateMessage: "",
        };
    case "UPDATE_OR_CREATE_ARTICLE_ERROR":
        return {
            ...state,
            updateOrCreateError: true,
            updateOrCreateMessage: action.payload.updateOrCreateMessage,
        };
    case "CLEAR_UPDATE_AND_CREATE_ERROR":
        return {
            ...state,
            updateOrCreateError: null,
            updateOrCreateMessage: "",
        };
    default:
        return state;
    }
};

export default articlesReducer;
