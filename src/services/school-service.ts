import { UserLoginInfo, UserRegistrationInfo, RequestMethod } from "../types";

function Exception(message: string, status: number) {
    return {
        message,
        status,
    };
}

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

    getAllUsers = async () => (
        await this.getResource("/user", "GET")
    )
}

export default SchoolService;
