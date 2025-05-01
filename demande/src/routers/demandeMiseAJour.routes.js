import { Router } from "express";
import {
  create,
  findAll,
  findById,
  update,
  deleteDemande,
} from "../controllers/demandeMiseAJour.controller.js";

const demandeMiseAJourRoutes = Router();

demandeMiseAJourRoutes.route("/").post(create).get(findAll);

demandeMiseAJourRoutes
  .route("/:id")
  .get(findById)
  .put(update)
  .delete(deleteDemande);

export default demandeMiseAJourRoutes;
