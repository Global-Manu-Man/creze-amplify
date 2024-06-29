import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Nos aliamos con grandes personas</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <img src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/crezeAllies/avatar_aliado1_cut.png" alt="Juan Carlos de Leon" className="testimonial-image" />
          <div className="testimonial-content">
            <a href="#" className="testimonial-video-link">Ver video</a>
            <h3>Juan Carlos de Leon</h3>
            <h4>Retail Product and Services</h4>
            <p>“Obtuvimos nuestro crédito en dos semanas... Creze nos da estabilidad”</p>
          </div>
        </div>
        <div className="testimonial">
          <img src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/crezeAllies/avatar_aliado2_cut.png" alt="Adrian Gómez Prieto" className="testimonial-image" />
          <div className="testimonial-content">
            <a href="#" className="testimonial-video-link">Ver video</a>
            <h3>Adrian Gómez Prieto</h3>
            <h4>Health Care Partners México</h4>
            <p>“Tener la confianza de contar con una herramienta financiera... es muy fácil y eficiente ”</p>
          </div>
        </div>
        <div className="testimonial">
          <img src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/crezeAllies/avatar_aliado3_cut.png" alt="Iñigo de Robina" className="testimonial-image" />
          <div className="testimonial-content">
            <a href="#" className="testimonial-video-link">Ver video</a>
            <h3>Iñigo de Robina</h3>
            <h4>Koolteck</h4>
            <p>“Llega nuestra primer orden de compra grande y acudimos a Creze para este financiamiento”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
