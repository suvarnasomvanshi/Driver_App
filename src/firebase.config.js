import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "33543546NeW1AkbKmPEpBmlYD3HEcXM",
  authDomain: "dss4534rsss.firebaseapp.com",
  databaseURL: "https://erer23erewd1269b-default-rtdb.firebaseio.com",
  projectId: "driewr3dffss",
  storageBucket: "ddferf9sssb.appspot.com",
  messagingSenderId: "5efdferf6098",
  appId: "1:523724383060:web:edfedf196b8141ec198",
  measurementId: "erferdfedfWSSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
