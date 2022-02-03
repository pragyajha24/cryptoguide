import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./config/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); //for Authentication
const db = getFirestore(firebaseApp); //for Using Database

export { auth, db };
