import React from "react";
import Navigation from "../components/navigation/navigation";

import { getFirestore } from "firebase/firestore/lite";
// import getFirebaseAdmin from "../firebase/firebaseAdmin";
import * as admin from "firebase-admin";

import "./layout.css";

import type { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  const firebaseAdminConfig = {
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

  console.log("admin.apps.length:  ", admin.apps.length);
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseAdminConfig),
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    });
  }

  const fireStore = getFirestore(admin.app, admin.firestore);

  return (
    <html>
      <head></head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
