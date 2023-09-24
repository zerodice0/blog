import * as firebaseAdmin from "firebase-admin";

const firebaseAdminConfig = {
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

if (firebaseAdmin.apps.length === 0) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseAdminConfig),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

export { firebaseAdmin };
