import express from 'express';
import { AppMiddleware } from './App.middleware';


const router = express.Router();


router.get('/elements', AppMiddleware.getElements);

router.post('/elements', AppMiddleware.createElement);


export { router as AppRouter };