import React from 'react';
import './CSS/ButtonValue.css';
import { useSelector } from 'react-redux';

function ButtonValue() {
  const buttonName = useSelector(state => state.navbar);

  return (
    <div className="button-value">
      <p>{buttonName}</p>
    </div>
  );
}

export default ButtonValue;