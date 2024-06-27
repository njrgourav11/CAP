import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Ensure this import is correct
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    // Your Firebase config
    apiKey: "AIzaSyDHDXGRTm0Zi12bo_kDJ8VLClepBWrMrY0",
    authDomain: "cap-db-74333.firebaseapp.com",
    projectId: "cap-db-74333",
    storageBucket: "cap-db-74333.appspot.com",
    messagingSenderId: "282155043718",
    appId: "1:282155043718:web:9957bb691495f0f3d7ba07",
    measurementId: "G-3Q2G8TWJPD",
    databaseURL: "https://cap-db-74333-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app); // Initialize Realtime Database

const storage = getStorage(app);

export { auth, provider, database, storage, ref, uploadBytes, getDownloadURL };
