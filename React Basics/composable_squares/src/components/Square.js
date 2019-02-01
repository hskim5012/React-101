import React from 'react';
import './Square.css';

const Square = (props) => {

  const { color, bg } = props;

  return (
    <div style = {{backgroundColor: bg}} className="square">
      <h1 style = {{color:color}}> {color} on {bg} </h1>
    </div>
  );
}

export default Square;
