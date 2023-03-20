import { AppModel } from "./App.Model";


export class AppController {

    static async getElements(): Promise<any> {
        return await AppModel.getElements();
    }

    static async createElement(body: any): Promise<any> {
        return await AppModel.createElement(body);
    }

}