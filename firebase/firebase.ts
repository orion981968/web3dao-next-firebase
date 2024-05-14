import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Configuration for the first Firebase application
const firebaseConfig1 = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "web3-dao-agency-articles",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Configuration for the second Firebase application for credit  cash bot
const firebaseConfig2 = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_2,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_2,
  projectId: "creditcash-discord",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_2,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_2,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_2,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID_2,
};

// this config is for the Job HR Version

const firebaseConfig3 = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_3,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_3,
  projectId: "web3dao-jobs-hr",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_3,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_3,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_3,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID_3,
};

// this config is for the Web3 Coding School

const firebaseConfig4 = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_4,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_4,
  projectId: "web3-dao-coding-school",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_4,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_4,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_4,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID_4,
};

const firebaseConfig5 = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_5,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_5,
  projectId: "easy-does-it-c440b",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_5,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_5,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_5,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID_5,
};

// Initialize or get the first Firebase application
const app1: FirebaseApp = !getApps().some((app) => app.name === "app1")
  ? initializeApp(firebaseConfig1, "app1")
  : getApp("app1");

// Initialize or get the second Firebase application
const app2: FirebaseApp = !getApps().some((app) => app.name === "app2")
  ? initializeApp(firebaseConfig2, "app2")
  : getApp("app2");

// Initialize or get the second Firebase application
const app3: FirebaseApp = !getApps().some((app) => app.name === "app3")
  ? initializeApp(firebaseConfig3, "app3")
  : getApp("app3");

// Initialize or get the third app (coding school)
const app4: FirebaseApp = !getApps().some((app) => app.name === "app4")
  ? initializeApp(firebaseConfig3, "app4")
  : getApp("app4");

const app5: FirebaseApp = !getApps().some((app) => app.name === "app5")
  ? initializeApp(firebaseConfig3, "app5")
  : getApp("app5");

// Get database and storage services for the first Firebase application
const database1: Database = getDatabase(app1);
const storage1: FirebaseStorage = getStorage(app1);

// Get database and storage services for the second Firebase application
const database2: Database = getDatabase(app2);
const storage2: FirebaseStorage = getStorage(app2);

// Get database and storage services for the third Firebase application
const database3: Database = getDatabase(app3);
const storage3: FirebaseStorage = getStorage(app3);

// Get database and storage services for the fourth Firebase application
const database4: Database = getDatabase(app4);
const storage4: FirebaseStorage = getStorage(app4);

// Get database and storage services for the fifth Firebase application

const database5: Database = getDatabase(app5);
const storage5: FirebaseStorage = getStorage(app5);

// Export the Firebase apps and their services
export { app1, database1, storage1 };
export { app2, database2, storage2 };
export { app3, database3, storage3 };
export { app4, database4, storage4 };

export { app5, database5, storage5 };
