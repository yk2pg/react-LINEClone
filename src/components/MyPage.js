import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { auth } from "../firebase.js";
import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

function MyPage() {
  return (
    <div>
        <div className="header">
            <Button 
                style={{color: "white", fontsize: "15px"}}
                component={RouterLink}
                to="/line">
                    戻る
            </Button>
            <Button
                style={{color: "white"}}>
                    <h3>{auth.currentUser.displayName}</h3>
            </Button>
            <CallIcon />
        </div>
        <div className='mypageContent'>
            <h4>Name</h4>
            <h5>{auth.currentUser.displayName}</h5>
            <h4>Email</h4>
            <h5>{auth.currentUser.email}</h5>
        </div>
    </div>
  )
}

export default MyPage
