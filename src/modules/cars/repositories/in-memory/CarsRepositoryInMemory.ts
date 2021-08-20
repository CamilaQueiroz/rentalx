import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  async create({
    name,
    description,
    daily_rate,
    available,
    licence_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const newCar = new Car();

    Object.assign(newCar, {
      name,
      description,
      daily_rate,
      available,
      licence_plate,
      fine_amount,
      brand,
      category_id,
    });

    this.cars.push(newCar);

    return newCar;
  }

  async findByLicencePlate(licence_plate: string): Promise<Car> {
    const car = this.cars.find((car) => car.licence_plate === licence_plate);

    return car;
  }
}

export { CarsRepositoryInMemory };
