import { auth } from "../firebase/firebase";
import {

  signOut
} from "firebase/auth";
import { useState } from "react";
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom';
export const LogoutButton = (props) => {


  const cookie = new Cookies();
  
  const{setIsAuth}=props;
  const navigate = useNavigate();
  function logout() {
    auth.signOut()
      .then(() => {
        // Sign-out successful.
        console.log('User signed out successfully.');
  cookie.remove('auth-token');
  window.location.reload();

      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  }

  return (
    <div >
      <button onClick={logout} className='hover:text-teal-500 hover:transition-all hover:ease-in-out'> Logout </button>
    </div>
  );
};