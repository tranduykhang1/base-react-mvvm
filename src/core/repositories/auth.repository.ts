import { LoginPayload, LoginResponse } from "@/types/auth.type";

export abstract class AuthRepository {
    abstract login(payload: LoginPayload): Promise<LoginResponse>;
    abstract logout(): Promise<void>;
    abstract register(username: string, password: string, name: string): Promise<{ username: string, password: string, name: string }>;
}