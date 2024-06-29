import React from 'react';
import './Requisitos.css';

const Requisitos = () => {
  return (
    <section id="requisitos" className="requisitos">
      <h2>Solo necesitas mínimos requisitos</h2>
      <div className="requisitos-container">
        <div className="requisito">
          <img src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/user-active.svg" alt="Usuario" className="requisito-icon" />
          <div className="arrow-down">↓</div>
        </div>
        <div className="requisito">
          <img src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/financial-active.svg" alt="Documento" className="requisito-icon" />
          <div className="arrow-down">↓</div>
        </div>
        <div className="requisito">
          <img src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/thumbs-up-active.svg" alt="Aprobación" className="requisito-icon" />
          <div className="arrow-down">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Requisitos;
