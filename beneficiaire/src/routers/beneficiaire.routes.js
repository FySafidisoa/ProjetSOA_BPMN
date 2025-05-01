import { Router } from "express";
import {
  create,
  deleteBeneficiaire,
  findAll,
  findById,
  update,
} from "../controllers/beneficiaire.controller.js";

const BenefRoute = Router();

BenefRoute.route("/").post(create).get(findAll);
BenefRoute.route("/:id").get(findById).put(update).delete(deleteBeneficiaire);

export default BenefRoute;
