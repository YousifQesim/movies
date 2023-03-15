import { auth, googleProvider } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import Cookies from 'universal-cookie'
import { toast } from 'react-toastify';
export const Auth = (props) => {
  const{setIsAuth}=props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookie = new Cookies();


  const signInWithGoogle = async () => {
    try {
      const result=   await signInWithPopup(auth, googleProvider);
      console.log(result)
      cookie.set("auth-token",result.user.refreshToken)
      setIsAuth(true);
      const user = result.user;
      toast(`Welcome ${user.displayName}!`);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <h1 class="text-3xl font-bold mb-4 text-white block mx-auto text-center">Get Started with Movies4Kurd: Sign In to Continue</h1>

<button  onClick={signInWithGoogle} class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded w-48 mt-5">
Sign In With Google
</button>
    </div>
  );
};