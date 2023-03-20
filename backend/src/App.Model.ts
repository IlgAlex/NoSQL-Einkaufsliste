import { DatabaseQueries } from "./database/databaseQueries";

export class AppModel {

    static async getElements(): Promise<any> {
        try {
            return await DatabaseQueries.getElements();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async createElement(collection: string, name: string): Promise<any> {
        try {
            return await DatabaseQueries.createElement(collection, name);
        } catch (err) {
            throw new Error(err);
        }
    }

    static async updateElement(id: string, status: string): Promise<any> {
        try {
            return await DatabaseQueries.updateElement(id, status);
        } catch (err) {
            throw new Error(err);
        }
    }

    static async deleteElement(id: string): Promise<any> {
        try {
            return await DatabaseQueries.deleteElement(id);
        } catch (err) {
            throw new Error(err);
        }
    }

}