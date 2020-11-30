import { Router } from 'express';
import multer from 'multer';

import authMiddleware from './middlewares/authMiddleware';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';
import UsersController from './controllers/UsersController';
import AuthController from './controllers/AuthController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

routes.post('/users', UsersController.create);
routes.post('/auth', AuthController.authenticate);
routes.get('/users', authMiddleware, UsersController.index);
routes.get('/users/:id', authMiddleware, UsersController.index);

export default routes;
