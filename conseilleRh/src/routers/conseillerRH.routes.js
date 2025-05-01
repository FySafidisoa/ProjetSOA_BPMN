import { Router } from 'express';
import {create, findAll, findById, update, deleteConseiller} from '../controllers/conseillerRH.controller.js';

const conseillerRHRoutes = Router();

conseillerRHRoutes.route('/').post(create).get(findAll);
conseillerRHRoutes.route('/:id').get(findById).put(update).delete(deleteConseiller);

export default conseillerRHRoutes;
