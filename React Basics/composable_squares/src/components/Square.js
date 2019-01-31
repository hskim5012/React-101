import React from 'react';

const Square = (props) => {
  return <div style={{color:props.color, fontWeight:'bold', width:'250px', height:'250px', float:'left', background:props.bg}}>{props.text}</div>;
}

export default Square;
