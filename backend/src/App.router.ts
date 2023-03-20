import express from 'express';
import { AppMiddleware } from './App.middleware';


const router = express.Router();


router.get('/elements', AppMiddleware.getElements);

router.post('/elements', AppMiddleware.createElement);

router.put('/elements/:id', AppMiddleware.updateElement);

router.delete('/elements/:id', AppMiddleware.deleteElement);


export { router as AppRouter };