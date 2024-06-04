import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "32784ggsdsssj2pm6NeW1AkbKmPEpBmlYD3HEcXM",
  authDomain: "dssdsdsdbsss.firebaseapp.com",
  databaseURL: "https:/edfdfewrewd1269b-default-rtdb.firebaseio.com",
  projectId: "driversfewdsfss",
  storageBucket: "drivefereew269sssb.appspot.com",
  messagingSenderId: "5edfewdwerw306098",
  appId: "1:523724383060:web:ewrwewe92196b8141ec198",
  measurementId: "edfwerwd1WSSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app)
