import express from 'express';
import { AppMiddleware } from './App.middleware.js';


const router = express.Router();

router.get('/test', AppMiddleware.test);


export { router as AppRouter };