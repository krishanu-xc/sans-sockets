import React from "react";
import "./bubble.css";
const Bubble = (props) => {
  return (
    <div className="bubble-main" style={props.me ? {justifyContent : "flex-start"} : {justifyContent : "flex-end"}}>
      <div className="bubble-in">
        {props.message}
      </div>
    </div>
  );
};

export default Bubble;
