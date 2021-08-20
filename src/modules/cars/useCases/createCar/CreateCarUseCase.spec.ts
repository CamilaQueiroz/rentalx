import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let carsRepository: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

describe("Create a car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });
  it("should be able to creata a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Car name",
      description: "Description car",
      daily_rate: 6,
      available: true,
      licence_plate: "ABC-9090",
      fine_amount: 80,
      brand: "Car brand",
      category_id: "category-id",
    });
    expect(car).toHaveProperty("id");
    expect(car).toHaveProperty("licence_plate");
  });

  it("should not be able to create a car with same plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car 1",
        description: "Description car",
        daily_rate: 6,
        available: true,
        licence_plate: "ABC-9090",
        fine_amount: 80,
        brand: "Car brand",
        category_id: "category-id",
      });

      await createCarUseCase.execute({
        name: "Car 2",
        description: "Description car",
        daily_rate: 6,
        available: true,
        licence_plate: "ABC-9090",
        fine_amount: 80,
        brand: "Car brand",
        category_id: "category-id",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a new car with available true by default", async () => {
    const carAvalability = await createCarUseCase.execute({
      name: "Car name",
      description: "avalability test",
      daily_rate: 6,
      available: true,
      licence_plate: "ABC-9090",
      fine_amount: 80,
      brand: "Car brand",
      category_id: "category-id",
    });

    expect(carAvalability.available).toBe(true);
  });
});
