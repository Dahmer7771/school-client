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

export interface UserRegistrationView {
    email: string,
    name: string,
    password: string,
    passwordConfirm: string
}

export interface SchoolService {
    login: (userInfo: UserLoginInfo) => Promise<{}>,
    registration: (userInfo: UserRegistrationInfo) => Promise<{}>,
    getAllUsers: (active: string | undefined, filter?: string, term?: string) => Promise<{}>,
    updateUser: (userId: string, role: string) => Promise<{}>,
    getAllArticles: (skip: number, limit: number) => Promise<{}>,
    getArticleById: () => Promise<{}>,
    createArticle: (data: any) => Promise<{}>,
    updateArticle: () => Promise<{}>,
    deleteArticle: () => Promise<{}>,
}

export interface LoginProps {
    schoolService: SchoolService,
    authentication: boolean,
    login: (data: UserLoginInfo) => void,
}

export interface RegistrationProps {
    schoolService: SchoolService,
    authentication: boolean,
    registration: (data: UserRegistrationInfo) => void,
}

export interface ElevationScrollProps {
    children: React.ReactElement;
}

export interface PostProps {
    _id: string,
    author: string,
    title: string,
    authorFirstChar: string,
    text: string,
    date: string,
    image: string,
}

export interface SideMenuProps {
    hideMenu: () => Action,
    showMenu: () => Action,
    isMenuOpen: boolean,
}

export interface ElevationHeaderProps {
    showMenu: () => Action,
    isAuth: boolean,
}

export interface AuthReducerState {
    isAuth: boolean,
    authentication: boolean,
    authSuccess: boolean,
    authError: boolean,
    currentUser: User | {},
    errorMessage: string,
}

export interface User {
    name: string,
    email: string,
    token: string,
}

export interface LogoutButtonProps {
    logout: () => void,
}

export interface ModalProps {
    title: string,
    text: string,
    isModalOpen: boolean,
    hideModal: () => Action,
    close: () => Action,
}

export interface AuthLayoutProps {
    authError: boolean,
    errorMessage: string,
    clearAuthError: () => Action,
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export interface UsersListItemProps {
    _id: string,
    email: string,
    name: string,
    role: string,
}

export type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

export type ErrorMessage = string;

export interface ArticlesReducerState {
    articles: Array<PostProps>,
    currentArticle: {} | null,
    articlesError: boolean,
    articlesMessage: string,
}

export interface ArticlesSectionProps {
    schoolService: SchoolService,
    skip: number,
    limit: number,
    getAllArticles: (skip: number, limit: number) => void,
    articles: Array<PostProps>,
}
