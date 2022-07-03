import React from 'react'
import { Button } from '@mui/material';
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

export default function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div className="header">
        <Button
          style={{color: "white", fontsize: "15px"}}
          onClick={signInWithGoogle}>
            Sign in with Google
        </Button>
    </div>
  )
}
