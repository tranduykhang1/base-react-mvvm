import { UserModel } from "../models/user.model";

export abstract class UserRepository {
    abstract getById(id?: string): Promise<UserModel>;
    abstract getCurrent(): Promise<UserModel>;
}
