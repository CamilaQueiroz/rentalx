import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { CreateUsersController } from "../../../../modules/accounts/useCases/createUsers/CreateUsersController";
import { UpdateAvatarController } from "../../../../modules/accounts/useCases/updateAvatar/UpdateAvatarController";
import { EnsureAuthenticated } from "../middlewares/EnsureAuthenticated";

const UsersRouter = Router();
const createUsersController = new CreateUsersController();
const updateAvatarController = new UpdateAvatarController();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

UsersRouter.post("/", createUsersController.handle);
UsersRouter.use(EnsureAuthenticated);
UsersRouter.patch(
  "/",
  uploadAvatar.single("avatar"),
  updateAvatarController.handle
);

export { UsersRouter };
