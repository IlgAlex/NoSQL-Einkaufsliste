import express from 'express';
import { AppMiddleware } from './App.middleware';


const router = express.Router();

router.get('/test', AppMiddleware.test);


export { router as AppRouter };