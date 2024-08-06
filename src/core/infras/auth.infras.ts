import { LoginPayload, LoginResponse } from "../../types/auth.type";
import { APIClientImpl } from "../client/api.client";
import { AuthRepository } from "../repositories/auth.repository";

export class AuthRepositoryImpl implements AuthRepository {
    _client: APIClientImpl;

    private readonly _prefix = "auth";

    constructor() {
        this._client = new APIClientImpl(this._prefix);
    }

    async login(payload: LoginPayload): Promise<LoginResponse> {
        return await this._client.post<LoginResponse, LoginPayload>(
            "/login",
            payload
        );
    }

    async logout(): Promise<void> {
        return;
    }

    async register(
        username: string,
        password: string,
        name: string
    ): Promise<{ username: string; password: string; name: string }> {
        return {
            username,
            password,
            name,
        };
    }
}

export const authRepositoryImpl = new AuthRepositoryImpl();
