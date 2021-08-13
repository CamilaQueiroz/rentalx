import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, email, driver_licence } = request.body;

    const createUseCase = container.resolve(CreateUsersUseCase);

    await createUseCase.execute({
      name,
      password,
      email,
      driver_licence,
    });

    return response.send();
  }
}

export { CreateUsersController };
