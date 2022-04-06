import { ModalHeader } from '@chakra-ui/react';
import React from 'react';
import Bubble from './bubble';
import "./mh.css"

const Memroom = (props) => {

    const messages = props.data.messages
    const room_id = props.data.room_id

    var outArr = []

    for (let i = 0; i < messages.length ; i++){
        outArr.push(<Bubble message = {messages[i].body} me = {messages[i].to !== props.curruser} />)
    }


    return ( 
        <div className="mh-main">
            <div className="room-id">{room_id}</div>
            <hr />
            <div className="text-area">{outArr}</div>

            <div className="input-area">
                <input type="text" className="input-input"/>
                <button className="input-button">send</button>
            </div>

        </div>
     );
}
 
export default Memroom;