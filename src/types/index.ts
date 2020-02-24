export interface Action {
    type: string;
    payload?: object;
}

export interface UserRegistrationInfo {
    name: string,
    email: string,
    password: string,
}

export interface UserLoginInfo {
    email: string,
    password: string,
}

export interface FormData {
    email: string,
    name: string,
    password: string,
    passwordConfirm: string
}

export interface SchoolService {
    login: (userInfo: UserLoginInfo) => Promise<{}>,
    registration: (userInfo: UserRegistrationInfo) => Promise<{}>,
}

export interface LoginProps {
    schoolService: SchoolService,
    login: (data: UserLoginInfo) => void,
}

export interface RegistrationProps {
    schoolService: SchoolService,
    registration: (data: UserRegistrationInfo) => void,
}

export interface State {
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
