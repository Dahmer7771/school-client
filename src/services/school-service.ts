type method = "GET" | "POST" | "PUT" | "DELETE";

interface userRegistration {
    name: string,
    email: string,
    password: string,
}

interface userLogin {
    email: string,
    password: string,
}

class SchoolService {
    _baseUrl = "http://localhost:5000/api";

    getResource = async (url: string, method: method, body?: object) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        const res = await fetch(`${this._baseUrl}${url}`, {
            method,
            headers,
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const resJSON = await res.json();
            throw new Error(resJSON.message);
        }

        return await res.json();
    };

    login = async (userInfo: userLogin) => (
        await this.getResource("/auth/login", "POST", userInfo)
    );

    registration = async (userInfo: userRegistration) => (
        await this.getResource("/auth/registration", "POST", userInfo)
    );
}

export default SchoolService;
