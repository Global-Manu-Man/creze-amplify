import React, { Fragment, useState, useEffect } from 'react';
import './HomeBanner.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from 'react-bootstrap';
import config from '../../config';
import axios from 'axios';

const HomeSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${config.base_URL}${config.selectAll}`);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      //console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5 my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <Fragment>
      <Container id="home-slider" className="mt-5 slider-container">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
        >
          {
            data.map((item, idx) => (
              item.logo_url ? (
                <div key={idx} className="Items">
                  <img className="images" src={item.logo_url} alt={item.name} />
                </div>
              ) : null
            ))
          }
        </Carousel>
      </Container>
    </Fragment>
  );
};

export default HomeSlider;
