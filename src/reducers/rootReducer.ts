interface State {
    posts: {
        title: string,
        text: string,
        user: string,
        date: Date,
        imageSrc: string,
    }[],
    isAuth: boolean,
    authentication: boolean,
    authSuccess: boolean,
    authError: boolean,
}

interface Action {
    type: string;
    payload?: any;
}

const loginRequest = (state: State) => ({
    ...state,
    authentication: true,
    authError: false,
    isAuth: false,
});

const loginSuccess = (state: State) => ({
    ...state,
    authentication: false,
    authError: false,
    isAuth: true,
});

const loginError = (state: State) => ({
    ...state,
    authentication: false,
    isAuth: false,
    authError: true,
});

const initialState: State = {
    posts: [],
    isAuth: false,
    authentication: false,
    authSuccess: false,
    authError: false,
};

const rootReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
    case "LOGIN_REQUEST":
        return loginRequest(state);
    case "LOGIN_SUCCESS":
        return loginSuccess(state);
    case "LOGIN_ERROR":
        return loginError(state);
    default:
        return state;
    }
};

export default rootReducer;
