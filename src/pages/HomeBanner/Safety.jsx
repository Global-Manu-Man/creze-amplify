import React, { Fragment} from 'react';
import './HomeBanner.css';
import { Col, Container, Row } from 'react-bootstrap';
import securityImg from '../../assets/_img/security-protection-hologram_53876-95825.jpg'

const Safety = () => {
    return (
        <Fragment>
            <Container id="safety" fluid className="safetySection">
              <Container>
              <Row className="safetySecRow">
                    <Col lg={6}>
                       <div className="safetyText">
                         <h2 className="headingStyle">Seguridad en Locallity</h2>
                         <p>Para Shop Local es sumamente importante la seguridad de nuestros clientes y de los negocios locales.</p>
                         <p>Si alguno de los negocios en la página lo consideras fraudulento, favor de <a className="reportLink" href="#action">reportarlo aquí</a> .</p>
                         <p>Te compartimos varias recomendaciones para tomar en consideración al momento de buscar un negocio:</p>
                         <ul>
                            <li><p>Asegúrate que sus redes sociales estén activas.</p></li>
                            <li><p>Asegúrate que se puedan dejar comentarios en sus redes sociales.</p></li>
                            <li><p>Revisa su página de internet, marca o escríbeles para asegurarse de que den un buen servicio.</p></li>
                            <li><p>Busca recomendaciones en redes sociales, grupos de conocidos, busca referencias.</p></li>
                            <small className="smallText mb-3">Locallity no se hace responsable de ningún intercambio de bienes o servicios entre el cliente y los negocios.</small>
                         </ul>

                       </div>
                    </Col>
                    <Col lg={6}>
                      <div className="securityImg">
                        <img src={securityImg} alt="" />

                      </div>
                    </Col>
                </Row>
              </Container>
            </Container>

        </Fragment>
    );
};

export default Safety;