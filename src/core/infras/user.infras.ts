import { APIClientImpl } from "../client/api.client";
import { UserModel } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserRepositoryImpl implements UserRepository {
    _client: APIClientImpl;

    private readonly _prefix = "users";

    constructor() {
        this._client = new APIClientImpl(this._prefix);
    }

    async getById(id: string): Promise<UserModel> {
        return await this._client.get<UserModel, string>(`/${id}`);
    }

    async getCurrent(): Promise<UserModel> {
        return await this._client.get<UserModel, string>(`/me`);
    }
}

export const userRepositoryImpl = new UserRepositoryImpl();
