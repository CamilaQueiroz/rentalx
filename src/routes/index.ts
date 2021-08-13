import { Router } from "express";

import { AuthenticateRoutes } from "./authenticate.routes";
import { CategoriesRoutes } from "./categories.routes";
import { SpecificationsRoutes } from "./specifications.routes";
import { UsersRouter } from "./users.routes";

const router = Router();

router.use("/categories", CategoriesRoutes);
router.use("/specifications", SpecificationsRoutes);
router.use("/users", UsersRouter);
router.use(AuthenticateRoutes);

export { router };
