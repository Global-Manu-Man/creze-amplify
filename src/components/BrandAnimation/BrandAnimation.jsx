import React, { useEffect } from 'react';
import logo from '../../assets/icon/logo_creze.svg';
import './BrandAnimation.css';

const BrandAnimation = ({ setLoading }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [setLoading]);
  return (
  <div>
    <div className="loader-bg" />
    <div className="loader">
      <img src={logo} alt="logo" />
      <div>
        <div className="line-base" />
        <div className="line" />
      </div>
    </div>
  </div>
)};

export default BrandAnimation;
