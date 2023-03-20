import { DocumentStore } from "ravendb";
import { store } from "./documentStore";

export class DatabaseQueries {

    static async test(): Promise<boolean> {
        const entry = {
            name: "apples",
            count: 5,
            price: 1.99,
            created: new Date()
        };
        try {
            const session = store.openSession();
            await session.store(entry, "items/1-A");
            await session.saveChanges();
            return true;
        } catch (err) {
            throw new Error(err);
        }
    }
    
}
