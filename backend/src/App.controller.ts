import { AppModel } from "./App.Model";


export class AppController {

    static async test(): Promise<boolean> {
        return await AppModel.test();
    }

}