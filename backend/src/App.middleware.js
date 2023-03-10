import { DatabaseQueries } from './database/databaseQueries.js';


export class AppMiddleware {

    static async test(req, res) {
        console.log('testing');
        try{
            return res.status(200).end(JSON.stringify(await DatabaseQueries.test()));
        } catch(err) {
            console.error('test error', err);
            return res.status(500).end();
        }
    }

}