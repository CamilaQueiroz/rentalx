import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const categoriesList = this.listCategoryUseCase.execute();

    return response.status(201).json({ categoriesList });
  }
}

export { ListCategoryController };
