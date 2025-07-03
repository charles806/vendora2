import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/slider1.jpg';
 import slider2 from '../../assets/slider2.png';
// import slider3 from '../../assets/image/slider3.jpg';
import '../../index.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function SimpleSlider() {
 var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 7000,
};

  return (
    <Slider {...settings} className="slider-container">
      <div className="slider-item">
        <div className="slider-text-overlay">
          <h2>Welcome to Vendora - Your Trusted Marketplace</h2>
          <p>Discover quality products from trusted sellers across Nigeria</p>
             <Button variant="contained " style={{ backgroundColor: '#3F51B5', transition: 'all 0.3s ease' }}>
                <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                  Shop Now
                 </Link>
            </Button>
        </div>
        <img src={slider1} alt="Logo" className='swiper-img' />
      </div>
     <div className="slider-item">
         <div className="slider-text-overlay">
          <h2>Hot Deals Just For You! 🔥</h2>
          <p>Up to 30% off on selected items. Don’t miss out!</p>
             <Button variant="contained " style={{ backgroundColor: '#3F51B5', transition: 'all 0.3s ease' }}>
                <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                 Browse Deals
                 </Link>
            </Button>
        </div>
          <img src={slider2} alt="Logo" className='swiper-img' /> 
      </div>
      <div className="slider-item">
         <div className="slider-text-overlay">
          <h2>Got Products to Sell?</h2>
          <p>Join Vendora today and reach thousands of buyers.</p>
             <Button variant="contained " style={{ backgroundColor: '#3F51B5', transition: 'all 0.3s ease' }}>
                <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                 Become a Seller
                 </Link>
            </Button>
        </div>
        {/* <img src={slider3} alt="Logo" className='swiper-img' /> */}
      </div>
    </Slider>
  );
}
