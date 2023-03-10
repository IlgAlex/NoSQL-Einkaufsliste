import express from 'express';


export class AppMiddleware {

    static async test(req, res) {
        console.log('testing');
        try{
            database
            return res.status(200).end(JSON.stringify({message: 'Test'}));
        } catch(err) {
            console.error('test error', err);
            return res.status(500).end();
        }
    }

}