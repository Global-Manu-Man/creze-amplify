// src/components/SuccessMessage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../SuccessPage/SuccessPage.css";

const SuccessMessage = () => {
    const navigate = useNavigate();
  
    const handleFinish = () => {
      navigate('/'); // Redirige a la página de inicio
    };
  
    return (
      <div className="success-message-container">
        <div className="success-message">
          <h2>¡Muchas gracias por la información!</h2>
          <p>
            Tus datos serán revisados y cualquier información adicional que requiramos te estaremos contactando al correo que se agregó en la encuesta.
          </p>
          <p>
            Bienvenidos a Case.
          </p>
          <button className="btn primary" onClick={handleFinish}>Finalizar</button>
        </div>
      </div>
    );
  };
  
  export default SuccessMessage;