import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import swaggerUi from "swagger-ui-express";
import errorHandler from "./middelewares/errorHandler.js";

import compagnieAssuranceRoutes from "./routers/compagnieAssurance.routes.js";

const swaggerDocument = require("./swagger/swagger.json");

const app = express();

// Middlewares globaux
app.use(express.json());

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes API
app.use("/api/compagnies", compagnieAssuranceRoutes);

// Middleware de gestion des erreurs (toujours à la fin)
app.use(errorHandler);

export default app;
