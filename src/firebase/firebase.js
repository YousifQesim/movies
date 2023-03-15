import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAJ78kBdFAM-bg9DvGRLmy9CMa4pY-Week",
  authDomain: "movies-f4abc.firebaseapp.com",
  projectId: "movies-f4abc",
  storageBucket: "movies-f4abc.appspot.com",
  messagingSenderId: "941278250109",
  appId: "1:941278250109:web:e87cd11348088859be1d14"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();



