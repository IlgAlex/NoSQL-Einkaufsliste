import express from 'express';
import { DatabaseQueries } from './database/databaseQueries';


export class AppMiddleware {

    static async test(req: express.Request, res: express.Response): Promise<express.Response> {
        console.log('testing');
        try{
            return res.status(200).end(JSON.stringify(await DatabaseQueries.test()));
        } catch(err) {
            console.error('test error', err);
            return res.status(500).end();
        }
    }

}