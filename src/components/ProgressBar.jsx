import React from 'react';
import '../assets/styles/styles.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div 
        className="progress-bar-fill" 
        style={{ width: `${progress}%` }}
      ></div>
      <span>{progress.toFixed(2)}%</span>
    </div>
  );
};

export default ProgressBar;
