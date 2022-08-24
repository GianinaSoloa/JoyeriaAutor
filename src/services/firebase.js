
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBTgkkoCHWj1c2XmUk72MltWO9DJZ65BlI",
  authDomain: "joyeria-app-react.firebaseapp.com",
  projectId: "joyeria-app-react",
  storageBucket: "joyeria-app-react.appspot.com",
  messagingSenderId: "471644571274",
  appId: "1:471644571274:web:56a6a9d46cb6872d170f73",
  measurementId: "G-MYS39977QY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestoreDB = getFirestore(app);

export default firestoreDB;