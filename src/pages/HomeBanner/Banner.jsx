import React, { useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div id="banner" className="banner">
      <span className="banner-message">
        <strong>¡AVISO IMPORTANTE!</strong> No te dejes engañar por personas ajenas a nuestra empresa. 
        <strong> NO</strong> pedimos depósitos anticipados o pagos de pólizas.
      </span>
      <button className="banner-close" onClick={() => setVisible(false)}>✕</button>
    </div>
  );
};

export default Banner;
