import React from 'react';
import './FooterBanner.css';

const FooterBanner = () => {
  return (
    <footer id="flooter" className="footer-banner">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/logo_creze.svg" alt="Creze Logo" />
        </div>
        <div className="footer-info">
          <div className="footer-contact">
            <h4>Datos de Contacto</h4>
            <p>WhatsApp: 72-02-32-58-12</p>
            <p>Teléfono: 55-76-93-69-50</p>
            <p>atencion@creze.com</p>
          </div>
          <div className="footer-offices">
            <h4>Oficinas</h4>
            <p>Bahía de Santa Barbara 145, Col. Verónica Anzures, Del. Miguel Hidalgo, Ciudad de México, C.P. 11300</p>
          </div>
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <p>Se informa que PRESTADORA DE SERVICIOS CICLOMART, S.A.P.I. de C.V., SOFOM E.N.R. es una Sociedad Financiera de Objeto Múltiple, Entidad No Regulada, que, realiza operaciones conforme a la Ley General de Organizaciones y Actividades Auxiliares del Crédito y, de conformidad con lo establecido en su artículo 87-J, no requiere la autorización de la Secretaría de Hacienda y Crédito Público para su constitución y operación y se encuentra sujeta a la supervisión de la Comisión Nacional Bancaria y de Valores, únicamente para efectos de lo dispuesto en el artículo 56 de la citada Ley.</p>
          <p>Costo Anual Total (CAT) de financiamiento expresado en términos porcentuales anuales sin IVA que, para fines informativos y de comparación, incorpora la totalidad de los costos y gastos inherentes a los créditos 52.27%. Fecha de cálculo 14/09/2023, vigente hasta el 31/12/2023. Calculado con base en un crédito de $1,000,000.00 a un plazo de 36 meses, con una tasa de interés anual del 21%, comisión por apertura del 5% y costo notarial promedio de $40,000.00.</p>
          <p>&copy; 2022 | Todos los derechos reservados | México</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBanner;
