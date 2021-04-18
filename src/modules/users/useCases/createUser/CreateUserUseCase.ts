import * as EmailValidator from "email-validator";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    if (!EmailValidator.validate(email)) {
      throw new Error("Email is not valid");
    }
    const checkEmailExistence = this.usersRepository.findByEmail(email);
    if (checkEmailExistence) {
      throw new Error("User with this email already exists");
    }
    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
