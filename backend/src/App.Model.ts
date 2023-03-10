export class AppModel {

    static async test(): Promise<boolean> {
        try {
            return true; 
        } catch (err) {
            throw new Error(err);
        }
    }

}