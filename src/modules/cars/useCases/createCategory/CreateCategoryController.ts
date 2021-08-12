import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const categoryUseCase = container.resolve(CreateCategoryUseCase);

    await categoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
