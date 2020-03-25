import { UserLoginInfo, UserRegistrationInfo, RequestMethod } from "../types";

const Exception = (message: string, status: number) => ({
    message,
    status,
});

class SchoolService {
    // _baseUrl = "https://konotop-gymnasium.herokuapp.com/api";
    _baseUrl = "http://localhost:5000/api";

    getResource = async (url: string, method: RequestMethod, body?: any, isFormData?: boolean) => {
        let response;
        const headers = new Headers();
        headers.append("Accept", "application/json");
        if (isFormData) {
            if (localStorage.getItem("school-user-with-jwt")) {
                const token = JSON.parse(localStorage["school-user-with-jwt"]).token.toString();
                headers.append("Authorization", token);
            }

            response = await fetch(`${this._baseUrl}${url}`, {
                method,
                headers,
                body,
            });
        } else {
            headers.append("Content-Type", "application/json");
            if (localStorage.getItem("school-user-with-jwt")) {
                const token = JSON.parse(localStorage["school-user-with-jwt"]).token.toString();
                headers.append("Authorization", token);
            }

            response = await fetch(`${this._baseUrl}${url}`, {
                method,
                headers,
                body: JSON.stringify(body),
            });
        }

        if (!response.ok) {
            if (response.status === 401) throw Exception("Unauthorized", response.status);
            const resJSON = await response.json();
            throw Exception(resJSON.message, response.status);
        }

        return await response.json();
    };

    login = async (userInfo: UserLoginInfo) => (
        await this.getResource("/auth/login", "POST", userInfo)
    );

    registration = async (userInfo: UserRegistrationInfo) => (
        await this.getResource("/auth/registration", "POST", userInfo)
    );

    getAllUsers = async (showMode: string = "all", filterField?: string, term?: string) => (
        await this.getResource(`/user?showMode=${showMode}&filterField=${filterField || ""}&term=${term || ""}`, "GET")
    );

    updateUser = async (userId: string, body: {}) => (
        await this.getResource(`/user/${userId}`, "PATCH", body)
    );

    getAllArticles = async (skip: number = 0, limit: number = 0) => (
        await this.getResource(`/article?limit=${limit}&skip=${skip}`, "GET")
    );

    getArticleById = async (articleId: string) => (
        await this.getResource(`/article/${articleId}`, "GET")
    );

    createArticle = async (body: {}) => (
        await this.getResource(`/article`, "POST", body, true)
    );

    updateArticle = async (articleId: string, body: {}) => (
        await this.getResource(`/article/${articleId}`, "PATCH", body)
    );

    deleteArticle = async (articleId: string) => (
        await this.getResource(`/article/${articleId}`, "DELETE")
    )
}

export default SchoolService;
