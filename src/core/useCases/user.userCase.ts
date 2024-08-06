import { classUtils } from "@/utils/class.util";
import { UserRepositoryImpl } from "../infras/user.infras";
import { UserModel } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) {
        classUtils.autoBind(this)
    }
    async getCurrent(): Promise<UserModel> {
        const res = await this.userRepository.getCurrent();
        return res;
    }
    async getById(id: string): Promise<UserModel> {
        const res = await this.userRepository.getById(id);
        return res;
    }
}

const userRepository = new UserRepositoryImpl();
export const userUseCase = new UserUseCase(userRepository);
