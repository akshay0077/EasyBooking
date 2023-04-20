import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf9yftj7Kbh5RT8RfI1I8c-qLecFn5qng",
  authDomain: "booking-project-1bbea.firebaseapp.com",
  projectId: "booking-project-1bbea",
  storageBucket: "booking-project-1bbea.appspot.com",
  messagingSenderId: "760765391077",
  appId: "1:760765391077:web:672d813212a64b76f7b40c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
