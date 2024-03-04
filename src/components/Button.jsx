import React from 'react';
import './styles/Button-module.css';

const Button = ({ onClick }) => {
  return (
    <div className="btn-load-container">
      <button className="load-more" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
