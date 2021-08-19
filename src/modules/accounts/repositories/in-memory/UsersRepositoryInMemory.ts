import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    driver_licence,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { driver_licence, email, name, password });

    this.users.push(user);
  }

  async update({
    id,
    driver_licence,
    name,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    this.users.forEach((user) => {
      if (user.id === id) {
        Object.assign(user, { driver_licence, name, avatar });
      }
    });
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);

    return user;
  }
}

export { UsersRepositoryInMemory };
