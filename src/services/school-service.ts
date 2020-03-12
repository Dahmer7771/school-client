import { UserLoginInfo, UserRegistrationInfo, RequestMethod } from "../types";

const Exception = (message: string, status: number) => ({
    message,
    status,
});

class SchoolService {
    _baseUrl = "http://localhost:5000/api";

    getResource = async (url: string, method: RequestMethod, body?: object) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        if (localStorage.getItem("school-user-with-jwt")) {
            const token = JSON.parse(localStorage["school-user-with-jwt"]).token.toString();
            headers.append("Authorization", token);
        }

        const res = await fetch(`${this._baseUrl}${url}`, {
            method,
            headers,
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            if (res.status === 401) throw Exception("Unauthorized", res.status);
            const resJSON = await res.json();
            throw Exception(resJSON.message, res.status);
        }

        return await res.json();
    };

    login = async (userInfo: UserLoginInfo) => (
        await this.getResource("/auth/login", "POST", userInfo)
    );

    registration = async (userInfo: UserRegistrationInfo) => (
        await this.getResource("/auth/registration", "POST", userInfo)
    );

    getAllUsers = async (active: string = "") => (
        await this.getResource(`/user?active=${active}`, "GET")
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

    createArticle = async (articleId: string, body: {}) => (
        await this.getResource(`/article/${articleId}`, "POST", body)
    );

    updateArticle = async (articleId: string, body: {}) => (
        await this.getResource(`/article/${articleId}`, "PATCH", body)
    );

    deleteArticle = async (articleId: string) => (
        await this.getResource(`/article/${articleId}`, "DELETE")
    )
}

export default SchoolService;
