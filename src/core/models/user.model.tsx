export class UserModel {
    email: string;
    firstName: string;
    lastName: string;

    static mapper(data: unknown): UserModel {
        const userModel = new UserModel();
        userModel.email = data["email"] as string;
        userModel.firstName = data["firstName"] as string;
        userModel.lastName = data["lastName"] as string;
        return userModel;
    }
}
