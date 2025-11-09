import admin, { ServiceAccount } from "firebase-admin";

// Reading environment variables from .env.local file.
// const serviceAccount: ServiceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_API_KEY!)

// Creating singleton instance of SDK admin application.
export function getFirebaseAdmin() {
  if (!admin.apps.length) {
    admin.initializeApp(
      //{credential: admin.credential.cert(serviceAccount)},
    );
  }
  return admin;
}

// Instantiating services needed from admin SDA for Server Side Rendering.
const firebaseAdmin = getFirebaseAdmin();
const db = firebaseAdmin.firestore();
export { db };