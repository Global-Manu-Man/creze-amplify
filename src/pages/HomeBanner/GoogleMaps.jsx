import React, { Fragment} from 'react';
import './HomeBanner.css';
import { Col, Container, Row } from 'react-bootstrap';

import googleMap from '../../assets/_img/google-maps.svg'
import locationImg from '../../assets/_img/trayecto-pc-movil.jpg'

const GoogleMaps = () => {
    return (
        <Fragment>
        <Container id="map" fluid className="googleMapSec">
            <Container>
                <Row className="googleMapRow">
                <Col lg={5}>
                    <div className="googleMapImg mb-3">
                        <img src={googleMap} alt="googleMap" />
                    </div>
                    <div className="mapsText">
                        <h2 className="headingStyle">Trayecto hasta tu negocio con Google Maps</h2>
                        <p>Da click en el mapa y busca lo que necesitas cerca de ti.</p>
                        <p>Permite el acceso a tu ubicación y te mostraremos los negocios con tienda física más cercanos para que puedas encontrar lo que buscas.</p>
                    </div>
                </Col>

                <Col lg={7}>
                    <div className="locationImg">
                        <img src={locationImg} alt="Location Img" />

                    </div>
                </Col>
            </Row>
            </Container>
        </Container>
        </Fragment>
    );
};

export default GoogleMaps;