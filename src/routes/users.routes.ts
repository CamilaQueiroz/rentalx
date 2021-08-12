import { Router } from "express";

import { CreateUsersController } from "../modules/accounts/useCases/createUsers/CreateUsersController";

const UsersRouter = Router();
const createUsersController = new CreateUsersController();

UsersRouter.post("/", createUsersController.handle);

export { UsersRouter };
