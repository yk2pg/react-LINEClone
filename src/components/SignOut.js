import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { auth } from "../firebase.js";
import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

function SignOut() {
  return (
    <div className="header">
      <Button 
        style={{color: "white", fontsize: "15px"}}
        onClick={() => auth.signOut()}>
            Sign Out
      </Button>
      <Button
        style={{color: "white"}}
        component={RouterLink}
        to="/mypage">
              <h3>{auth.currentUser.displayName}</h3>
      </Button>
      <CallIcon />
    </div>
  );
}

export default SignOut;