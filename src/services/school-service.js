const Exception = (message, status) => ({
    message,
    status,
});

class SchoolService {
    // _baseUrl = "https://konotop-gymnasium.herokuapp.com/api";
    _baseUrl = "http://localhost:5000/api";

    getResource = async (url, method, body, isFormData) => {
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

    login = async (userInfo) => (
        await this.getResource("/auth/login", "POST", userInfo)
    );

    registration = async (userInfo) => (
        await this.getResource("/auth/registration", "POST", userInfo)
    );

    getAllUsers = async (showMode = "all", filterField, term, teachers = false) => (
        await this.getResource(`/user?showMode=${showMode}&filterField=${filterField || ""}&term=${term || ""}&teachers=${teachers}`, "GET")
    );

    updateUser = async (userId, body) => (
        await this.getResource(`/user/${userId}`, "PATCH", body)
    );

    getAllArticles = async (skip = 0, limit = 0, term = "") => (
        await this.getResource(`/article?limit=${limit}&skip=${skip}&term=${term}`, "GET")
    );

    getArticleById = async (articleId) => (
        await this.getResource(`/article/${articleId}`, "GET")
    );

    createArticle = async (body) => (
        await this.getResource(`/article`, "POST", body, true)
    );

    updateArticle = async (articleId, body) => (
        await this.getResource(`/article/${articleId}`, "PATCH", body, true)
    );

    deleteArticle = async (articleId) => (
        await this.getResource(`/article/${articleId}`, "DELETE")
    );

    getAllClasses = async () => (
        await this.getResource(`/grade`, "GET")
    );

    getClassById = async (classId) => (
        await this.getResource(`/grade/${classId}`, "GET")
    );

    createClass = async (body) => (
        await this.getResource(`/grade`, "POST", body)
    );

    updateClass = async (classId, body) => (
        await this.getResource(`/grade/${classId}`, "PATCH", body)
    );

    deleteClass = async (classId) => (
        await this.getResource(`/grade/${classId}`, "DELETE")
    )
}

export default SchoolService;
