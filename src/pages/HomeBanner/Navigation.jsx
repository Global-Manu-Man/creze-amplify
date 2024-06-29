import React, { Fragment, useEffect, useRef, useState } from 'react';
import './HomeBanner.css';
import { Container, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { useRedirect } from '../../hooks/useRedirect';
import pathname from '../../routes';
import { useLocation } from 'react-router-dom/dist';
import { useUserAuth } from '../../context/userAuthContext';
import  '../HomeBanner/Navigation.css'



const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavRef = useRef();
  const { user, logOut } = useUserAuth();

  const toggleMobileNav = () => {
    setMobileNavOpen((prevState) => !prevState);
   
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (mobileNavOpen && mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setMobileNavOpen(false);
       
      }
    };

    const handleDocumentScroll = () => {
      if (mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('scroll', handleDocumentScroll);
    

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('scroll', handleDocumentScroll);
    };
  }, [mobileNavOpen]);
  
  const [showSubcategories, setShowSubcategories] = useState(null);
  const [color, setColor] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    if (currentPath !== '/') {
      setColor(false);
    } else {
      setColor(true);
    }
  }, [currentPath])

  const onCategoryHover = (category) => setShowSubcategories(category);
  const onCategoryLeave = () => setShowSubcategories(null);
  const navigate = useRedirect();

  const [category, setCategory] = useState('');
  const [subCategory, setsubCategory] = useState('');


  useEffect(() => {
    
    if (category && subCategory) {
      const onClickSubCategory = (subCategory) => navigate(`${pathname.anunciantes}?category=${category}&subcategory=${subCategory}`)
      onClickSubCategory(subCategory)
    }
    else if (category) {
      const onClickCategory = (category) => navigate(`${pathname.anunciantes}?category=${category}`)
      onClickCategory(category)
    }

  }, [category, subCategory, navigate]);

  function setCategoryAndSub(cate, subC) {
    if (cate) setCategory(cate);
    if (cate && subC) setsubCategory(subC);
  }

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  };
 
    return (
      <Fragment>
        <Container id="lg-nav">
          <Navbar expand="lg" className="bg-transparent mt-2">
            <Container fluid>
              <Navbar.Brand
                className="cursor-pointer"
                onClick={() => navigate(pathname.home)}
              >
                <img
                  height={28}
                  src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/logo_creze.svg"
                  alt="logo-creze"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="my-2 my-lg-0 w-100 d-flex align-items-center justify-content-between"
                  navbarScroll
                >
                  <div className="d-flex">
                    <Nav.Link
                      className={`navDesign ${color && "text-black"}`}
                      onClick={() => navigate(pathname.home)}
                    >
                      Inicio
                    </Nav.Link>
                    <Nav.Link
                      className={`navDesign ${color && "text-black"}`}
                      href="#flooter"
                      onClick={() => navigate(pathname.home)}
                    >
                      Nosotros
                    </Nav.Link>
                    <Nav.Link
                      className={`navDesign ${color && "text-black"}`}
                      href="#flooter"
                      onClick={() => navigate(pathname.home)}
                    >
                      Blog
                    </Nav.Link>
                    <Nav.Link
                      className={`navDesign ${color && "text-black"}`}
                      href="#flooter"
                      onClick={() => navigate(pathname.home)}
                    >
                      Programa de Lealtad
                    </Nav.Link>
                    <Nav.Link
                      className={`navDesign ${color && "text-black"}`}
                      href="#flooter"
                      onClick={() => navigate(pathname.home)}
                    >
                      Contacto
                    </Nav.Link>
                    <Nav.Link
                      className={`navDesign ${color && "text-black"}`}
                      href="#flooter"
                      onClick={() => navigate(pathname.home)}
                    >
                      Simulador
                    </Nav.Link>
                    {/* <Nav.Link className={`navDesign ${color && 'text-black'}`}  href="#map"> Aplica Ahora</Nav.Link> */}
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {user ? (
                      <>
                        <Nav.Link
                          className={`navDesign ${color && "text-black"}`}
                          onClick={() => navigate(pathname.captureform)}
                        >
                          Aplica Ahora
                        </Nav.Link>

                        <Nav.Link
                          className={`navDesign ${
                            color ? "text-black" : ""
                          } fw-bold cursor-pointer`}
                          href="#logout"
                          onClick={handleLogout}
                          style={{
                            fontSize: 15,
                            paddingTop: 15,
                            paddingBottom: 0,
                            margin: 0,
                            lineHeight: "24px",
                            fontWeight: "normal",
                          }}
                        >
                          Cerrar sesión
                        </Nav.Link>

                        {/* <p className={`${color && 'text-white'} fw-bold cursor-pointer`}  onClick={handleLogout} style={{fontSize: 15, paddingTop: 15 }}>
                            Cerrar sesión
                          </p> */}
                      </>
                    ) : (
                      <Nav.Link
                        className={`navDesign ${color && "text-black"}`}
                        onClick={() => navigate(pathname.login)}
                      >
                        Iniciar sesión
                      </Nav.Link>
                    )}
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <Container id="xs-nav" className="position-absolute">
          <Navbar expand="lg" className="bg-transparent">
            <Container>
              <Navbar.Brand onClick={() => navigate(pathname.home)}>
                <img
                  height={28}
                  src="https://s3.amazonaws.com/dev.cdn.creze.com/creze-thunder/logo_creze.svg"
                  alt="localityLogo"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="mbl-basic-navbar-nav"
                onClick={toggleMobileNav}
              />
              {/*  */}
              {/* */}

              <Navbar.Collapse
                id="mbl-basic-navbar-nav"
                ref={mobileNavRef}
                show={mobileNavOpen ? "true" : undefined}
                className={mobileNavOpen ? "show" : ""}
              >
                <Nav className="me-auto">
                <Nav.Link className="navDesignXs" href="#banner">
                    Inicio
                  </Nav.Link>
                  <Nav.Link className="navDesignXs" href="#requisitos">
                    Nosotros
                  </Nav.Link>
                  <Nav.Link className="navDesignXs" href="#testimonials">
                    Blog
                  </Nav.Link>
                  <Nav.Link className="navDesignXs" href="#home-slider">
                    Programa de Lealtad
                  </Nav.Link>
                  <Nav.Link className="navDesignXs" href="#flooter">
                    Contacto
                  </Nav.Link>
                  <Nav.Link className="navDesignXs" href="#testimonials">
                    Simulador
                  </Nav.Link>
                  <Nav.Link className="navDesignXs" href="#banner">
                    Mapa
                  </Nav.Link>
                  {user ? (
                    <>
                      <Nav.Link
                        className="navDesignXs"
                        onClick={() => navigate(pathname.captureform)}
                      >
                        ¡Aplica ahora!
                      </Nav.Link>
                      <Nav.Link
                        className={`navDesign ${
                          color ? "text-black" : ""
                        } fw-bold cursor-pointer`}
                        href="#map"
                        onClick={handleLogout}
                        style={{
                          fontSize: 15,
                          paddingTop: 2,
                          lineHeight: "24px",
                          paddingBottom: 0,
                          margin: 0,
                          paddingLeft:30

                        }}
                      >
                        Cerrar sesión
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link
                      className="navDesignXs"
                      onClick={() => navigate(pathname.login)}
                    >
                      Iniciar sesión
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </Fragment>
    );
};

export default Navigation;