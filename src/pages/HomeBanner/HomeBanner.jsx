import React, { Fragment, useState, useEffect } from "react";
import "./HomeBanner.css";
import Navigation from "./Navigation";
import HomeSlider from "./HomeSlider";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LandingPage from "./LandingPage";
import GoogleMaps from "./GoogleMaps";
import Safety from "./Safety";
import Footer from "./Footer";
import { useRedirect } from "../../hooks/useRedirect";
import pathname from "../../routes";
import Banner from "./Banner";
import Testimonials from "../HomeBanner/Testimonials";
import Requisitos from "../HomeBanner/Requisitos";
import Carousel from "../HomeBanner/Carousel";

const HomeBanner = () => {
  const [categorie, setCategorie] = useState("");
  const [search, setSearch] = useState("");
  const redirect = useRedirect();
  useEffect(() => {
    if (categorie) {
      redirect(`${pathname.anunciantes}?category=${categorie}`);
    }
  }, [categorie, redirect]);
  return (
    <Fragment>
      <Container fluid style={{ overflow: "hidden" }} className="topBanner">
        <div className="">
          <Navigation />
        </div>
      </Container>
      <LandingPage />
      <Requisitos />
      <Carousel />
      <HomeSlider />
      <Testimonials />
      <Banner />
      <Footer />
    </Fragment>
  );
};

export default HomeBanner;
