import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAzj__j2pm6NeW1AkbKmPEpBmlYD3HEcXM",
  authDomain: "drivershaab-1269b.firebaseapp.com",
  databaseURL: "https://drivershaab-1269b-default-rtdb.firebaseio.com",
  projectId: "drivershaab-1269b",
  storageBucket: "drivershaab-1269b.appspot.com",
  messagingSenderId: "523724383060",
  appId: "1:523724383060:web:e88b36ce092196b8141ec1",
  measurementId: "G-55SKE69D1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app)