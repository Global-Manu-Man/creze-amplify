import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import pathname from '../../routes';
import './SuccessPage.css';
import logo from '../../assets/icon/locallity-logo-full.svg';
import { AiOutlineEnter } from 'react-icons/ai';

const SuccessPage = () => {
    const buttonRef = useRef(null);
    const focusableDivRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            buttonRef.current.click();
        }
    };

    useEffect(() => {
        focusableDivRef.current.focus();
    }, []);
    return (
        <div
            className="d-flex align-items-center justify-content-center bg-custom"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            ref={focusableDivRef}
            style={{ outline: 'none' }}
        >
            <div className="text-center success-width">
                <h5 className='pb-1'>¡Muchas gracias por la información!</h5>
                <p>
                    Tus datos serán revisados y cualquier información adicional que requiramos te estaremos contactando al correo que se agregó en la encuesta.
                </p>
                <p className="py-2">Bienvenidos a Creze.</p>
                <div className='success-cover'>
                    <Link to={pathname.home} ref={buttonRef} className="btn btn-primary rounded-0">
                        Finalizar
                    </Link>
                    <p className='success-info'>Press Enter <AiOutlineEnter /></p>
                </div>
            </div>
            <div className='success'>
                <Link to={pathname.home}><img src={logo} alt="logo" /></Link>
            </div>
        </div>
    );
};

export default SuccessPage;