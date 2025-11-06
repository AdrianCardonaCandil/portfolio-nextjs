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

export const getJobs = async () => {
    try {
        const jobsRef = db.collection("jobs");
        const snapshot = await jobsRef.get();
        const jobs = snapshot.docs.map(doc => doc.data());
        return jobs;
    } catch (error) {
        console.error('Error while getting jobs: ', error);
    }
};

export const getProjects = async () => {
    try {
        const projectsRef = db.collection("projects");
        const snapshot = await projectsRef.get();
        const projects = snapshot.docs.map(doc => doc.data());
        return projects;
    } catch (error) {
        console.error('Error while getting projects: ', error);
    }
};