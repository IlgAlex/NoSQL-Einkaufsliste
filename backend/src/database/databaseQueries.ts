import { store } from "./documentStore";

export class DatabaseQueries {

    static async getElements(): Promise<any> {
        try {
            const session = store.openSession();
            const elements = await session.query({ collection: "list" }).orderByDescending('erstellt').all();
            return elements;
        } catch (err) {
            throw new Error(err);
        }
    }

    static async createElement(body: any): Promise<any> {
        try {
            const session = store.openSession();
            const element = {
                "Name": body.name,
                "@metadata": {
                    "@collection": body.collection
                },
                "status": "open",
                "erstellt": new Date()
            };
            await session.store(element);
            await session.saveChanges();
            return element;
        } catch (err) {
            throw new Error(err);
        }
    }
    
}
