import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userRequesting = this.usersRepository.findById(user_id);

    if (!userRequesting) {
      throw new Error("User not found");
    }

    if (!userRequesting.admin) {
      throw new Error(
        "user is not an admin and therefore don't have access to that"
      );
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
