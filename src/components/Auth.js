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
    <div>
  

      <button className="bg-white" onClick={signInWithGoogle}> Sign In With Google</button>

      <button className="bg-white" onClick={logout}> Logout </button>
    </div>
  );
};