import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const SpecificationsRoutes = Router();

SpecificationsRoutes.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

SpecificationsRoutes.get("/", (request, response) => {
  listSpecificationController.handle(request, response);
});

export { SpecificationsRoutes };
