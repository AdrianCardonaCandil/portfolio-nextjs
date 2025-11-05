import 'server-only';

import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore'

// Reading the key from Google Cloud Secret Manager as a Env Variable.
const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!admin.apps.length) {
    if (!serviceAccountKey) {
        console.warn('Firebase Admin SDK no se inicializó: FIREBASE_SERVICE_ACCOUNT_KEY no está definida.')
    } else {
        admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(serviceAccountKey))
        })
    }
}

// Exporting the admin services for backend development
const adminDb = admin.apps.length ? getFirestore() : null;

export { adminDb }