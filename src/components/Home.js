import React from 'react'

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.js";

import Line from "../components/Line";
import SignIn from '../components/SignIn';

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Line /> : <SignIn />}
    </div>
  )
}

export default Home
