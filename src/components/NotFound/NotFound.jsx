import React from 'react';
import './NotFound.css';
import Footer from '../../pages/HomeBanner/Footer';
import { Link } from 'react-router-dom';
import pathname from '../../routes';
import Navigation from '../../pages/HomeBanner/Navigation';

const NotFound = () => {
    return (
        <div className='bg-custom'>
            <Navigation />
            <div className="container pb-5 mb-5">
            <div className="text-center mt-5 pt-5">
                <h1 className="display-1">404</h1>
                <h2 className="display-4">Página no encontrada</h2>
                <p className="lead">
                    La página que buscas no existe
                </p>
                <Link to={pathname.home} className="btn btn-primary">
                    Ir a inicio
                </Link>
            </div>
            </div>
            <div className='not-found-footer'>
                <Footer />
            </div>
        </div>
    );
};

export default NotFound;