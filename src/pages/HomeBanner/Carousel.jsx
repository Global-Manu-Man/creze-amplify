import React, { useState } from 'react';
import styles from './Carousel.module.css';
import image1 from '../../assets/_img/girl_new.svg'; 
import image2 from '../../assets/_img/creze_super_cool.svg';
import image3 from '../../assets/_img/man_new.svg';

const Carousel = () => {
    const slides = [
      {
        image: image1,
        title: "Un crédito adecuado a tus necesidades",
        description: "Con garantía inmobiliaria de $1M a $20M. Tenemos un plazo de hasta 60 meses. Todo de forma sencilla y fácil.",
        link1: "Aplicar ahora",
        link2: "Simula tu crédito"
      },
      {
        image: image2,
        title: "Otro crédito que te conviene",
        description: "Con garantía de vehículos de $500K a $10M. Plazo de hasta 48 meses. Proceso rápido y seguro.",
        link1: "Solicitar ahora",
        link2: "Calcula tu crédito"
      },
      {
        image: image3,
        title: "El mejor crédito para tu negocio",
        description: "Con garantía de maquinaria de $2M a $15M. Plazo de hasta 36 meses. Fácil y rápido.",
        link1: "Ver más",
        link2: "Cotiza tu crédito"
      }
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    return (
      <div id="carousel" className={styles.carousel}>
        <div className={styles.imageContainer}>
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{slides[currentSlide].title}</h2>
          <p className={styles.description}>{slides[currentSlide].description}</p>
          <div className={styles.links}>
            <a href="#" className={styles.link}>{slides[currentSlide].link1}</a>
            <a href="#" className={styles.link}>{slides[currentSlide].link2}</a>
          </div>
        </div>
        <div className={styles.nav}>
          <button onClick={prevSlide} className={styles.navButton}>←</button>
          <button onClick={nextSlide} className={styles.navButton}>→</button>
        </div>
      </div>
    );
  };
  
  export default Carousel;