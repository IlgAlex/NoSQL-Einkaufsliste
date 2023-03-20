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
                return res.status(400).end('Missing "collection" or "name" parameter');
            } else {
                return res.status(200).end(JSON.stringify(await AppController.createElement(req.body.collection, req.body.name)));
            }
        } catch(err) {
            console.error('createElement error', err);
            return res.status(500).end();
        }
    }

    static async updateElement(req: express.Request, res: express.Response): Promise<express.Response> {
        try{
            const id = req.params.id;
            if(!req.body.status) {
                return res.status(400).end('Missing "status" parameter');
            } else {
                return res.status(200).end(JSON.stringify(await AppController.updateElement(id, req.body.status)));
            }
        } catch(err) {
            console.error('updateElement error', err);
            return res.status(500).end();
        }
    }

    static async deleteElement(req: express.Request, res: express.Response): Promise<express.Response> {
        try{
            const id = req.params.id;
            return res.status(200).end(JSON.stringify(await AppController.deleteElement(id)));
        } catch(err) {
            console.error('deleteElement error', err);
            return res.status(500).end();
        }
    }

}