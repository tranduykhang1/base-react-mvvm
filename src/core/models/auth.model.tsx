export class AuthModel {
    accessToken: string;
    refreshToken: string;

    static mapper(data: unknown): AuthModel {
        const authModel = new AuthModel();
        authModel.accessToken = data['at'] as string;
        authModel.refreshToken = data['rt'] as string;
        return authModel;
    }
}
