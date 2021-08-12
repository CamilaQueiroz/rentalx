import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecification/ListSpecificationController";

const SpecificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

SpecificationsRoutes.post("/", createSpecificationController.handle);

SpecificationsRoutes.get("/", listSpecificationController.handle);

export { SpecificationsRoutes };
