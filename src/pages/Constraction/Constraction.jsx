import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import constractionImg from '../../assets/images/en-construccion-2.svg';
import locallyLogo from '../../assets/icon/locallity-logo-full.svg';
import './Constraction.css';
import { useRedirect } from '../../hooks/useRedirect';
import pathname from '../../routes';

const Constraction = () => {
  const navigate = useRedirect();
    return (
        <div className="container">
        <div className='construc-main'>
          <div className='construction text-center'>
            <div className='mb-4'>
              <img className='locally-logo' src={locallyLogo} alt="Locally_Logo" />
            </div>
            <img className='constraction-img' src={constractionImg} alt="constraction_image" />
            <h2 className="fw-bold mt-3 mb-3 title-cons">Página en construcción</h2>
            <p className='mb-3 des-cons'>La plataforma está en construcción. Si tienes un negocio, puedes ir registrándote.</p>
            <p onClick={() => navigate(pathname.registration)} className='btn btn-outline-dark border-2 rounded-1 py-2 px-3 fw-semibold'>Quiero registrarme <BiChevronRight /></p>
          </div>
        </div>
      </div>
    );
};

export default Constraction;