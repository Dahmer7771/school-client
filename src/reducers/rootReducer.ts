interface State {
    posts: {
        title: string,
        text: string,
        user: string,
        date: Date,
        imageSrc: string,
    }[],
    isAuth: boolean,
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: State = {
    posts: [],
    isAuth: false,
};

const rootReducer = (state = initialState, action: Action) => {
    switch (action.type) {
    case "init":
        return state;
    default:
        return state;
    }
};

export default rootReducer;
