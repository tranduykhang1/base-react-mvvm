import { classUtils } from "@/utils/class.util";
import { LoginPayload } from "../../types/auth.type";
import { AuthRepositoryImpl } from "../infras/auth.infras";
import { AuthModel } from "../models/auth.model";
import { AuthRepository } from "../repositories/auth.repository";

export class AuthUseCase {
    constructor(private readonly authRepository: AuthRepository) {
        classUtils.autoBind(this);
    }
    async login(payload: LoginPayload): Promise<AuthModel> {
        const res = await this.authRepository.login(payload);
        return AuthModel.mapper(res);
    }

    async logout(): Promise<void> {
        await this.authRepository.logout();
        return;
    }

    async register(
        username: string,
        password: string,
        name: string
    ): Promise<{ username: string; password: string; name: string }> {
        return await this.authRepository.register(username, password, name);
    }
}

const authRepository = new AuthRepositoryImpl();
export const authUseCase = new AuthUseCase(authRepository);
