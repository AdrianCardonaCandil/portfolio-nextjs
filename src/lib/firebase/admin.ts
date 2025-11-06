import admin, { ServiceAccount } from "firebase-admin";

// Reading environment variables from .env.local file.
const serviceAccount: ServiceAccount = {
    projectId: process.env.SERVICE_ACCOUNT_API_KEY_PROJECT_ID,
    privateKey: process.env.SERVICE_ACCOUNT_API_KEY_PRIVATE_KEY,
    clientEmail: process.env.SERVICE_ACCOUNT_API_KEY_CLIENT_EMAIL,
};

// Creating singleton instance of SDK admin application.
export function getFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  return admin;
}

// Instantiating services needed from admin SDA for Server Side Rendering.
const firebaseAdmin = getFirebaseAdmin();
const db = firebaseAdmin.firestore();
export { db };