import { Router } from "express";
import {
  create,
  findAll,
  findById,
  update,
  deleteEmploye,
} from "../controllers/employe.controller.js";

const EmployeRouter = Router();

EmployeRouter.route("/").post(create).get(findAll);

EmployeRouter.route("/:id").get(findById).put(update).delete(deleteEmploye);

export default EmployeRouter;
