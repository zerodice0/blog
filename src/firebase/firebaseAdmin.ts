import * as admin from "firebase-admin";

const getFirebaseAdmin = async () => {
  const firebaseAdminConfig = {
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

  if (admin.apps.length === 0) {
    console.log("initializeApp!");

    admin.initializeApp({
      credential: admin.credential.cert(firebaseAdminConfig),
    });
  }

  return admin;
};

export default getFirebaseAdmin;
