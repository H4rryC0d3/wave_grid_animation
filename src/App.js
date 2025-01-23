import React, { useState } from 'react';
import Grid from './Grid';
import './App.css';

const App = () => {
  const [rows, setRows] = useState(15);
  const [columns, setColumns] = useState(20);

  return (
    <div className="app-container">
      <h1>Dynamic Wave Grid</h1>
      <Grid rows={rows} columns={columns} />
      <div className="controls">
        <label>
          Rows:
          <input 
            type="number" 
            value={rows} 
            onChange={(e) => setRows(Math.max(1, +e.target.value))} 
          />
        </label>
        <label>
          Columns:
          <input 
            type="number" 
            value={columns} 
            onChange={(e) => setColumns(Math.max(1, +e.target.value))} 
          />
        </label>
      </div>
    </div>
  );
};

export default App;
