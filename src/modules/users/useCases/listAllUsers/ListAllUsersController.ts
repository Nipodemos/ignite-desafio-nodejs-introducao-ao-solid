import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.header("user_id");
    if (!user_id) {
      throw new Error("user_id is empty");
    }
    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      console.log("users :>> ", users);
      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
