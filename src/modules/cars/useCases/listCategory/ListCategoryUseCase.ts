import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    const categoriesList = this.categoriesRepository.list();

    return categoriesList;
  }
}

export { ListCategoryUseCase };
