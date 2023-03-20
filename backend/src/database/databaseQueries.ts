import { store } from "./documentStore";

export class DatabaseQueries {

    static async getElements(): Promise<any> {
        try {
            const session = store.openSession();
            const elements = await session.query({ collection: "list" }).orderByDescending('created').all();
            return elements;
        } catch (err) {
            throw new Error(err);
        }
    }

    static async createElement(collection: string, name: string): Promise<any> {
        try {
            const session = store.openSession();
            const element = {
                "Name": name,
                "@metadata": {
                    "@collection": collection
                },
                "status": "open",
                "created": new Date(),
                "last_change": new Date()
            };
            await session.store(element);
            await session.saveChanges();
            return element;
        } catch (err) {
            throw new Error(err);
        }
    }

    static async updateElement(id: string, status: string): Promise<any> {
        try {
            const session = store.openSession();
            let element: any = await session.load(id);
            element.status = status;
            element.last_change = new Date();
            await session.saveChanges();
            return element;
        } catch (err) {
            throw new Error(err);
        }
    }

    static async deleteElement(id: string): Promise<any> {
        try {
            const session = store.openSession();
            await session.delete(id);
            await session.saveChanges();
            return "Element deleted";
        } catch (err) {
            throw new Error(err);
        }
    }
    
}
