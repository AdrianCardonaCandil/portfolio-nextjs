import { db } from "./admin";
import { jobs, projects } from "../seed";

export const seedDatabase = async () => {
    try {
        const jobsRef = db.collection("jobs");
        const projRef = db.collection("projects");
        await db.runTransaction(async transaction => {
            for (const job of jobs) {
                const document = jobsRef.doc();
                transaction.set(document, job);
            };
            for (const project of projects) {
                const document = projRef.doc();
                transaction.set(document, project);
            };
        })
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error('Error while seeding database: ', error);
    }
}