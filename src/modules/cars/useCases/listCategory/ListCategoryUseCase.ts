import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categoriesList = await this.categoriesRepository.list();

    return categoriesList;
  }
}

export { ListCategoryUseCase };
