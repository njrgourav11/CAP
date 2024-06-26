// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHDXGRTm0Zi12bo_kDJ8VLClepBWrMrY0",
    authDomain: "cap-db-74333.firebaseapp.com",
    projectId: "cap-db-74333",
    storageBucket: "cap-db-74333.appspot.com",
    messagingSenderId: "282155043718",
    appId: "1:282155043718:web:9957bb691495f0f3d7ba07",
    measurementId: "G-3Q2G8TWJPD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };