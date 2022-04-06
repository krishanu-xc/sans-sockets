import React, { useState } from "react";
import "./chats.css";
import { users, chats } from "../data";
import Rooms from "./roomHandle";
import Memroom from "./messageHandle";
import axios from "axios";


const Chats = (props) => {
  const def = 
    {
      room_id: "def",
      messages: [],
    };

  const getData = async () => {
    await axios
    .get("http://localhost:8000/record")
    .then( function (response) {
      console.log(response.data)
    })
  
  }



  const currentUser = "krishanu@gmail.com"

  const [sel, setSel] = useState();
  const [currchat, setCurr] = useState(def);

  var rooms = [];

  const changeChat = (toName) => {
    const res = chats.find(({ room_id }) => room_id === toName);
    setCurr(res);
  };

  for (let i = 0; i < chats.length; i++) {
    let tempvar = chats[i].room_id;
    rooms.push(<Rooms name={tempvar} onClick={() => changeChat(tempvar)} />);
  }

  return (
    <div className="chats-main">
      <div className="chat-names">{rooms}</div>
      <div className="chat-area">
        <Memroom data={currchat} curruser = {currentUser}/>
      </div>
    </div>
  );
};
export default Chats;
