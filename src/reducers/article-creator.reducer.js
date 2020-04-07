const initialState = {
    title: "",
    image: null,
    content: "",
};

const articleCreatorReducer = (state = initialState, action) => {
    switch (action.type) {
    case "SET_ARTICLE_TITLE":
        return { ...state, title: action.payload.title };
    case "SET_ARTICLE_IMAGE":
        return { ...state, image: action.payload.image };
    case "SET_ARTICLE_CONTENT":
        return { ...state, content: action.payload.content };
    default:
        return state;
    }
};

export default articleCreatorReducer;
