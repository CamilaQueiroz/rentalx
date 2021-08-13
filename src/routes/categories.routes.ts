import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/listCategory/ListCategoryController";

const CategoriesRoutes = Router();
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

const upload = multer({
  dest: "./tmp",
});

CategoriesRoutes.post("/", createCategoryController.handle);

CategoriesRoutes.get("/", listCategoryController.handle);

CategoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { CategoriesRoutes };
