import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

CategoriesRoutes.get("/", (request, response) => {
  listCategoryController.handle(request, response);
});

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  importCategoryController.handle(request, response);
});

export { CategoriesRoutes };
