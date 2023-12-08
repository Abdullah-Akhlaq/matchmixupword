import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
    getStorage,
} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCyzZ8UZkzbBNdVBQZ4L7NOJxwRuOrtLSY",
    authDomain: "wordcheck-d715f.firebaseapp.com",
    projectId: "wordcheck-d715f",
    storageBucket: "wordcheck-d715f.appspot.com",
    messagingSenderId: "74614979893",
    appId: "1:74614979893:web:9afed2b2318e4ad665607c",
    measurementId: "G-1ZK7N48W1S"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);