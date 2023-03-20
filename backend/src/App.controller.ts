import { AppModel } from "./App.Model";


export class AppController {

    static async getElements(): Promise<any> {
        return await AppModel.getElements();
    }

    static async createElement(collection: string, name: string): Promise<any> {
        return await AppModel.createElement(collection, name);
    }

    static async updateElement(id: string, status: string): Promise<any> {
        if(status === "open" || status === "closed") {
            return await AppModel.updateElement(id, status);
        } else {
            return "status must be 'open' or 'closed'";
        }
    }

    static async deleteElement(id: string): Promise<any> {
        return await AppModel.deleteElement(id);
    }

}