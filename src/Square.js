import React from 'react';
import './Grid.css';

const Square = ({ intensity }) => {
  const normalizedIntensity = (intensity + 1) / 2; // Normalize to [0, 1]
  return (
    <div
      className="cell"
      style={{
        backgroundColor: `rgba(0, 255, 0, ${normalizedIntensity})`, // Green with intensity
      }}
    ></div>
  );
};

export default Square;
