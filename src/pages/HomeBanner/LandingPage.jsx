import React from 'react';
import styles from './LandingPage.module.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/capture-form');
  };

  return (
    <div id="landing-page" className={styles.landingPage}>
      <div className={styles.imageContainer}>
        <img src="https://s3.amazonaws.com/beta.cdn.creze.com/creze-thunder/renders_svg/creze_super_cool.svg" alt="Negocio" className={styles.aboutImg} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Liquidez para tu negocio</h1>
        <p className={styles.description}>
          Obtén hasta 20 millones con garantía y 3 millones sin garantía en <strong>72 horas</strong>
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.primary}`} onClick={handleButtonClick}>
            ¡Aplica ahora!
          </button>
          <button className={`${styles.btn} ${styles.secondary}`}>¡Simula tu crédito!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
