import express from 'express';
import { AppController } from './App.controller';


export class AppMiddleware {

    static async getElements(req: express.Request, res: express.Response): Promise<express.Response> {
        try{
            return res.status(200).end(JSON.stringify(await AppController.getElements()));
        } catch(err) {
            console.error('getElements error', err);
            return res.status(500).end();
        }
    }

    static async createElement(req: express.Request, res: express.Response): Promise<express.Response> {
        try{
            if(!req.body.collection || !req.body.name) {
                return res.status(400).end();
            } else {
                return res.status(200).end(JSON.stringify(await AppController.createElement(req.body)));
            }
        } catch(err) {
            console.error('createElement error', err);
            return res.status(500).end();
        }
    }

}