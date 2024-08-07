import { env } from "@/config/env";
import { AUTH_KEY } from "@/enum/auth.enum";
import { default as Axios, AxiosInstance } from "axios";
import { setupCache } from "axios-cache-interceptor";

interface APIClient {
    get<T, P>(url: string, params: P | Record<string, unknown>): Promise<T>;
    delete<T, P>(url: string, params: P | Record<string, unknown>): Promise<T>;
    post<T, U>(url: string, payload: U): Promise<T>;
    patch<T, U>(url: string, payload: U): Promise<T>;
}

export class APIClientImpl implements APIClient {
    _client: AxiosInstance;
    constructor(prefix: string) {
        this._config(prefix);
    }

    private _config(prefix: string) {
        this._client = Axios.create({
            baseURL: `${env.apiUrl}/${prefix}`,
            headers: {
                "Content-Type": "application/json",
            },
            timeout: 10000,
            validateStatus: (status) => status >= 200 && status <= 500,
        });
        this._setAuthToken();

        this._client.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this._client.interceptors.response.use(
            (response) => {
                if (![200, 201].includes(response.status)) {
                    return Promise.reject(response.data);
                }
                return Promise.resolve(response);
            },
            (error) => {
                throw new Error(error);
            }
        );

        setupCache(this._client, {
            ttl: 10 * 1000, // 10s,
        });
    }
    _setAuthToken = (token?: string) => {
        if (!token) {
            token =
                JSON.parse(window.localStorage.getItem(AUTH_KEY.token))
                    ?.accessToken || "";
        }
        this._client.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${token}`;
    };

    async get<T, P>(url: string, params?: P): Promise<T> {
        this._setAuthToken();
        const res = await this._client.get(url, { params });
        return res.data?.data || res.data;
    }

    async post<T, U>(url: string, body: U): Promise<T> {
        const res = await this._client.post(url, body);
        return res.data?.data || res.data;
    }

    async patch<T, U>(url: string, body: U): Promise<T> {
        const res = await this._client.patch(url, body);
        return res.data?.data || res.data;
    }

    async delete<T, P>(
        url: string,
        params: P | Record<string, unknown>
    ): Promise<T> {
        const res = await this._client.delete(url, {
            params,
        });
        return res.data?.data || res.data;
    }
}
