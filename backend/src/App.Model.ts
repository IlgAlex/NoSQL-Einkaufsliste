import { DatabaseQueries } from "./database/databaseQueries";

export class AppModel {

    static async getElements(): Promise<any> {
        try {
            return await DatabaseQueries.getElements();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async createElement(body: any): Promise<any> {
        try {
            return await DatabaseQueries.createElement(body);
        } catch (err) {
            throw new Error(err);
        }
    }

}