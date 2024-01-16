import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from '../firebaseConfig'

const app = initializeApp(firebaseConfig);

//referenciák :

//adatbázis
export const db = getFirestore(app);
//tárolóhely
export const storeage = getStorage(app);
//hitelesítés
export const auth = getAuth(app);

