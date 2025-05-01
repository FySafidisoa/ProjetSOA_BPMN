import { Router } from 'express';
import {create, findAll, findById, update, deleteCompagnie} from '../controllers/companieAssurance.controller.js';

const compagnieAssuranceRoutes = Router();

compagnieAssuranceRoutes.route('/').post(create).get(findAll);
compagnieAssuranceRoutes.route('/:id').get(findById).put(update).delete(deleteCompagnie);


export default compagnieAssuranceRoutes;
