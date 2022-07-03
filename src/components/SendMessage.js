import React, { useState } from 'react'
import { db, auth } from "../firebase.js"
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function SendMessage() {
  const [message, setMessage] = useState("");
  // const [message, setMessage] = useState(() => {
  //   const savedMsg = localStorage.getItem("msg");
  //   const parsedMsg = JSON.parse(savedMsg);
  //   return parsedMsg || "";
  // });
  const inputMessage = (data) => {
    localStorage.setItem("msg", data);
    setMessage(data);
  };
  const strageMessage = localStorage.getItem('msg');
  function sendMessage(e) {
      e.preventDefault();

      const {uid, photoURL} = auth.currentUser;

      db.collection("messages").add({
          text: message,
          photoURL,
          uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage("");
      localStorage.setItem("msg", "");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
          <div className="sendMsg">
              <Input 
                style={{
                width: "78%",
                fontSize: "15px",
                fontWeight: "550",
                marginLeft: "5px",
                marginBottom: "-3px",
                }}
                placeholder='message nyuryoku'
                type="text"
                onChange={(e) => inputMessage(e.target.value)}
                value={strageMessage ? strageMessage : message}
              />
              <SendIcon />
          </div>
      </form>
    </div>
  )
}

export default SendMessage
