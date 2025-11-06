import admin, { ServiceAccount } from "firebase-admin";

const serviceAccount: ServiceAccount = {
    projectId: process.env.SERVICE_ACCOUNT_API_KEY_PROJECT_ID,
    privateKey: process.env.SERVICE_ACCOUNT_API_KEY_PRIVATE_KEY,
    clientEmail: process.env.SERVICE_ACCOUNT_API_KEY_CLIENT_EMAIL,
};

export function getFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  return admin;
}

const firebaseAdmin = getFirebaseAdmin();
const db = firebaseAdmin.firestore();
export { firebaseAdmin, db, serviceAccount };