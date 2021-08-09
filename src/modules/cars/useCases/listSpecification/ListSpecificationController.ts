import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const listSpecification = this.listSpecificationUseCase.execute();

    return response.status(201).json({ listSpecification });
  }
}

export { ListSpecificationController };
