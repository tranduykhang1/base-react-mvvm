import { UserModel } from "@/core/models/user.model";

export type LoginPayload = {
    email: string;
    password: string;
};

export type RegisterPayload = {
    email: string;
    password: string;
    name: string;
};

export type LoginResponse = {
    accessToken: string;
    refreshToken: string;
};

export type UseAuthResponse = {
    token: string;
    isAuth: boolean;
    user: UserModel;
    getCurrentUser: () => Promise<void>;
};
