import { Router } from "express";
import {
  create,
  findAll,
  findById,
  update,
  deleteNotification,
} from "../controllers/notification.controller.js";

const notificationRoutes = Router();

notificationRoutes.route("/").post(create).get(findAll);
notificationRoutes
  .route("/:id")
  .get(findById)
  .put(update)
  .delete(deleteNotification);

export default notificationRoutes;
