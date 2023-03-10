export class AppModel {

    static async test() {
        try {
            return true; 
        } catch (err) {
            throw new Error(err);
        }
    }

}