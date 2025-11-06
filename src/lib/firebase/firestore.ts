import { firebaseAdmin, db, serviceAccount } from "./admin";
import { jobs, projects } from "../seed";

export const seedDatabase = async () => {
    try {
        if (db) {
            const collection = db.collection('jobs');
            const document = collection.doc();
            await document.set(jobs[1]);
            console.log('Documento añadido')
        } else {
            console.log(firebaseAdmin)
        }
    } catch (error) {
        console.log(error)
    }
}