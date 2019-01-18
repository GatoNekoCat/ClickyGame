import React from "react";
import "./DBZCard.css";

const DBZCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.clickEvent(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default DBZCard;