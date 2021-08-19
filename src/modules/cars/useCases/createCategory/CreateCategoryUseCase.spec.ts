import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let createCategoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    createCategoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(createCategoryInMemory);
  });

  it("should be able to add a new category", async () => {
    const category = {
      name: "Vidro Elétrico",
      description: "Sistema nas 4 portas",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const createdCategory = await createCategoryInMemory.findByName(
      category.name
    );

    expect(createdCategory).toHaveProperty("id");
    expect(createdCategory).toHaveProperty("name");
    expect(createdCategory).toHaveProperty("description");
    expect(createdCategory).toHaveProperty("created_at");
  });

  it("should not be able to add a new category when the category already exists", async () => {
    expect(async () => {
      const category = {
        name: "Vidro Elétrico",
        description: "Sistema nas 4 portas",
      };

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
