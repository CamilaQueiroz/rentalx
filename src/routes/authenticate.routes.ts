import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const AuthenticateRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

AuthenticateRoutes.post("/", authenticateUserController.handle);

export { AuthenticateRoutes };
