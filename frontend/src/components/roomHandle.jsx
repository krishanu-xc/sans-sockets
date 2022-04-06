import React from 'react';
import "./rh.css"

const Rooms = (props) => {
    return ( 
        <div className = "rh-main" onClick={props.onClick} key={props.name}>
            {props.name}
        </div>
     );
}
 
export default Rooms;