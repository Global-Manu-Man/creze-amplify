import React, { useEffect, useState } from "react";
import "./Negocio.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { VscTasklist } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";
import ModalImage from "react-modal-image";
import {
  BsFacebook,
  BsEnvelopeAt,
  BsFillPinFill,
  BsTelephoneOutbound,
  BsBriefcase,
  BsAirplane,
} from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import axios from "axios";
import config from "../../config";
import { useParams } from "react-router-dom";
import Navigation from "../HomeBanner/Navigation";

const fetchData = async (id_business) => {
  try {
    const response = await axios.get(
      `${config.base_URL}${config.locality}/${id_business}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

function extractUsernameURL(url) {
    // Remove trailing slash if exists
    url = url.replace(/\/$/, "");
    // Remove question marks from the URL
    url = url.replace(/\?/g, "");
    // Split URL by '/' to get the username
    const parts = url.split('/');
    // The username should be the last part of the URL
    let username = parts[parts.length - 1];
    // Remove leading '@' if exists
    if (username.startsWith('@')) {
        username = username.substring(1);
    }
    if (username.length > 28) {
      username = username.substring(0, 28);
    }
    return `@${username}`;
}
function extractDomainFromURL(url) {
  // Create a new URL object with the provided URL
  const parsedUrl = new URL(url);
  // Get the hostname from the parsed URL
  const domain = parsedUrl.hostname;
  return domain;
}

const Negocio = () => {
  const { id_business } = useParams();
  const [loading, setLoading] = useState(true);
  // use this for show data
  const [business, setBusiness] = useState({});
  const [images, setImages] = useState([]);
  const [days, setDays] = useState([]);
  const [socialNetworks, setSocialNetworks] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchDataAndSetData = async () => {
      try {
        const fetchedData = await fetchData(id_business);
        if (fetchedData) {
          setBusiness(fetchedData.business_details[0]);
          console.log(fetchedData.business_details[0]);
          setImages(fetchedData.images);
          const day = fetchedData.business_details[0].business_days.split(",");
          const socialNetworksArray =
            fetchedData.business_details[0].social_networks.split(",");
          setSocialNetworks(socialNetworksArray);
          setDays(day);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };

    if (id_business) {
      fetchDataAndSetData();
    }

    // Cleanup function
    return () => {
      // Perform any cleanup if necessary
    };
  }, [id_business]);

  if (loading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center py-5 my-5"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="negocio-img">
        <Navigation />
      </div>
      <Container>
        <img
          src={business.logo_url}
          className="negocio-logo"
          alt="negocio logo"
        />

        <Row>
          <Col lg={9} className="mt-3">
            <div className="mt-4 pt-5">
              <div className="custom-flex">
                <h3 className="negocio-title">{business.name}</h3>
                <span className="fs-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#0d6efd"
                    className="bi bi-patch-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
                </span>
              </div>
              {/* <p className="title-business">{business.description}</p> */}
            </div>
            <div className="mt-5">
              <h3 className="negocio-title">Información General</h3>
              <p className="title-business">{business.description}</p>
            </div>
            <div  className="mb-5">
              <Row>
                <Col className="mt-4" lg={4}>
                  <a
                    className="text-decoration-none text-dark"
                    href={"mailto:" + business.email}
                  >
                    <div className="feature-card">
                      <BsEnvelopeAt className="feature-img" />
                      <div>
                        <h6 className="mb-0 feature-title">
                          Correo electrónico
                        </h6>

                        <p className="text-muted mb-0">Toca aquí para enviar</p>
                      </div>
                    </div>
                  </a>
                </Col>
                <Col className="mt-4" lg={4}>
                  <div className="feature-card">
                    <BsTelephoneOutbound className="feature-img" />
                    <div>
                      <a
                        className="text-decoration-none text-dark"
                        href={"tel:" + business.cell_phone_number}
                      >
                        <h6 className="mb-0 feature-title">Teléfono</h6>
                        <p className="text-muted mb-0">Toca aquí para llamar</p>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col className="mt-4" lg={4}>
                  <div className="feature-card">
                    <FaWhatsapp className="feature-img" />
                    <div>
                      <h6 className="mb-0 feature-title">WhatsApp</h6>
                      <p className="text-muted mb-0">
                        {business.cell_phone_number}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                {business.bill ? (
                  <Col className="mt-4" lg={4}>
                    <div className="feature-card">
                      <VscTasklist className="feature-img" />
                      <div>
                        <h6 className="mb-0 feature-title">Emite factura</h6>
                      </div>
                    </div>
                  </Col>
                ) : null}
              </Row>
            </div>
            {/* {business.online_store ? (
              <div>
                <div className="mt-5">
                  <h3 className="negocio-title">Tienda en línea</h3>
                  <p className="title-business">
                    Toca el icono para abrir en una nueva pestaña.
                  </p>
                </div>
                <div className="mt-3 pb-3">
                  <Row>
                    {socialNetworks.map((link, index) => {
                      const trimmedLink = link.trim();
                      let icon = null;
                      let heading = null;
                      let lastElement = null;
                      let linkUrl = null;

                      if (trimmedLink.includes("instagram")) {
                        icon = <AiOutlineInstagram className="feature-img" />;
                        heading = "Instagram";
                        const startIndex = trimmedLink.indexOf(".com/") + 5;
                        const endIndex = trimmedLink.indexOf("/", startIndex);
                        lastElement = trimmedLink.substring(
                          startIndex,
                          endIndex
                        );
                        linkUrl = "@" + lastElement;
                      } else if (trimmedLink.includes("facebook")) {
                        icon = <BsFacebook className="feature-img" />;
                        heading = "Facebook";
                        const splitParts = trimmedLink.split("/");
                        lastElement = splitParts.pop();
                        linkUrl = "/" + lastElement;
                      } else {
                        icon = <TbWorld className="feature-img" />;
                        heading = "Sitio Web";
                        const splitParts = trimmedLink.split("/");
                        lastElement = splitParts.pop();
                        linkUrl = trimmedLink;
                      }

                      return (
                        <Col className="mb-4" lg={4}>
                          <div
                            className="feature-card cursor-pointer"
                            onClick={() => (window.location.href = trimmedLink)}
                          >
                            {icon}
                            <div>
                              <h6 className="mb-0 feature-title"> {heading}</h6>
                              <p className="text-muted mb-0">{linkUrl}</p>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            ) : null} */}

            {
                (business?.instagram_url || business?.facebook_url || business?.website_url || business?.tiktok_url) &&
                <div>
                    <div>
                        <h3 className="negocio-title">Tienda en línea</h3>
                        <p className="title-business">
                        Toca el icono para abrir en una nueva pestaña.
                        </p>
                    </div>
                    <div className="mt-3 pb-3">
                        <Row>
                            {
                                business?.instagram_url &&
                                <Col className="mb-4" lg={4}>
                                <div
                                className="feature-card cursor-pointer"
                                onClick={() => window.open(business?.instagram_url, '_blank')}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                </svg>
                                <div>
                                    <h6 className="mb-0 feature-title">Instagram</h6>
                                    <p className="text-muted mb-0">{extractUsernameURL(business?.instagram_url)}</p>
                                </div>
                                </div>
                                </Col>
                            }
                            {
                                business?.facebook_url &&
                                <Col className="mb-4" lg={4}>
                                <div
                                className="feature-card cursor-pointer"
                                onClick={() => window.open(business?.facebook_url, '_blank')}
                                >
                                <BsFacebook className="feature-img text-primary" />
                                <div>
                                    <h6 className="mb-0 feature-title">Facebook</h6>
                                    <p className="text-muted mb-0">{extractUsernameURL(business?.facebook_url)}</p>
                                </div>
                                </div>
                                </Col>
                            }
                            {
                                business?.website_url &&
                                <Col className="mb-4" lg={4}>
                                <div
                                className="feature-card cursor-pointer"
                                onClick={() => window.open(business?.website_url, '_blank')}
                                >
                                <TbWorld className="feature-img text-info" />
                                <div>
                                    <h6 className="mb-0 feature-title">Website</h6>
                                    <p className="text-muted mb-0">{extractDomainFromURL(business?.website_url)}</p>
                                </div>
                                </div>
                                </Col>
                            }
                            {
                                business?.tiktok_url &&
                                <Col className="mb-4" lg={4}>
                                <div
                                className="feature-card cursor-pointer"
                                onClick={() => window.open(business?.tiktok_url, '_blank')}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                <path fill="#212121" fill-rule="evenodd" d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z" clip-rule="evenodd"></path><path fill="#ec407a" fill-rule="evenodd" d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z" clip-rule="evenodd"></path><path fill="#81d4fa" fill-rule="evenodd" d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z" clip-rule="evenodd"></path>
                                </svg>
                                <div>
                                    <h6 className="mb-0 feature-title">Website</h6>
                                    <p className="text-muted mb-0">{extractUsernameURL(business?.tiktok_url)}</p>
                                </div>
                                </div>
                                </Col>
                            }
                        </Row>
                    </div>
                </div>
            }

            <hr />
            <div className="mt-4">
              <h3 className="negocio-title">Galería de imágenes</h3>
              <p className="title-business">
                Toca una imagen para abrir la galería.
              </p>
            </div>
            <div className="mt-1 gal-card">
              {images.map((item, index) => (
                <ModalImage
                  className="img-galery"
                  key={index}
                  small={item}
                  large={item}
                  alt="Image-1"
                />
              ))}
            </div>
            {business.physical_store && business.url_google != null ? (
              <div className="mt-5 mb-4">
                <h3 className="negocio-title mb-3">Tienda física</h3>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-dark"
                    href={business.url_google}
                  >
                    <div className="feature-card cursor-pointer">
                      <BsFillPinFill className="feature-img" />
                      <div>
                        <h6 className="mb-1 feature-title">Encuéntranos en</h6>
                        <p className="text-primary mb-0">
                          {business.city +
                            "," +
                            business.state +
                            "," +
                            business.country}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ) : null}
            <Row>
              <Col lg={6}>
                <Accordion
                  defaultActiveKey={["0"]}
                  alwaysOpen
                  className="Accordion-width my-5"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {" "}
                      Hoy {business.start_date + "-" + business.end_date}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table bordered>
                        <tbody>
                          {days.map((item, index) => (
                            <tr key={index}>
                              <td>{item}</td>

                              <td>
                                {business.start_date + "-" + business.end_date}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={6}>
                {/* {
                                business.url_google &&
                                <div className='mb-5 pb-3' style={{ width: '100%', maxWidth: '600px' }}>
                                            <Map url={business.url_google} />
                                </div>
                            } */}
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="right-col-negocio">
            <div>
              <h4 className="fw-bolder">Características</h4>
              {business.delivery ? (
                <div className="feature-card mt-3">
                  <RiEBike2Fill className="feature-img-right" />
                  <p>Servicio a domicilio</p>
                </div>
              ) : null}
              {business.shipping && (
                <div className="feature-card mt-3">
                  <BsAirplane className="feature-img-right" />
                  <p>Envios nacionales</p>
                </div>
              )}
              {business.delivery ? (
                <div className="feature-card mt-3">
                  <GrLocation className="feature-img-right" />
                  <p>Envios locales</p>
                </div>
              ) : null}
              {business.is_owner_verified && (
                <div className="feature-card mt-3">
                  <BsBriefcase className="feature-img-right" />
                  <p>Negocio verificado</p>
                </div>
              )}
            </div>
            {/*                         <div className='mt-4'>
                            <h5 className='fw-bolder'>CÓDIGO PROMOCIONAL</h5>
                            <FormControl className="w-75" type='text' placeholder='' />
                            <p className='mt-1 fw-bold'>Válido al 15 de octubre 2021.</p>
                        </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Negocio;
