import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUsersUseCase } from "../createUsers/CreateUsersUseCase";
import { AuthenticateUserUseCase, IResponse } from "./AuthenticateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUsersUseCase: CreateUsersUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUsersUseCase = new CreateUsersUseCase(usersRepositoryInMemory);
  });

  it("should be able authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_licence: "00999894834",
      name: "Camila Queiroz",
      email: "camila@email.com",
      password: "Acesso",
    };

    await createUsersUseCase.execute({
      driver_licence: user.driver_licence,
      name: user.name,
      email: user.email,
      password: user.password,
    });

    const newUser = await usersRepositoryInMemory.findByEmail(user.email);

    const auth = await authenticateUserUseCase.execute({
      email: newUser.email,
      password: user.password,
    });

    const authResponse: IResponse = {
      user: {
        name: newUser.name,
        email: newUser.email,
      },
      token: auth.token,
    };

    expect(auth).toMatchObject(authResponse);
  });

  it("should not be able to authenticate a non user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "false",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate an user with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_licence: "00999894834",
        name: "Camila Queiroz",
        email: "camila@brazamerican.com",
        password: "Acesso",
      };

      await usersRepositoryInMemory.create(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "incorrectPassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
