import React, { useState, useEffect } from 'react';
import Square from './Square';
import './Grid.css';

const Grid = ({ rows, columns }) => {
  const [wavePattern, setWavePattern] = useState([]);

  useEffect(() => {
    const generatePattern = () => {
      const pattern = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) => Math.sin(i + j) * Math.random())
      );
      setWavePattern(pattern);
    };

    const interval = setInterval(() => {
      generatePattern();
    }, 1000);

    generatePattern();

    return () => clearInterval(interval);
  }, [rows, columns]);

  return (
    <div className="grid-container" style={{ '--rows': rows, '--columns': columns }}>
      {wavePattern.map((row, i) =>
        row.map((value, j) => <Square key={`${i}-${j}`} intensity={value} />)
      )}
    </div>
  );
};

export default Grid;
