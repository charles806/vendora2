import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../CatSlider/style.css';
// import required modules
import { Navigation } from 'swiper/modules';
import fashion from '../../assets/fashion-cat.png'
import Electronics from '../../assets/ele-cat.png'
import Bag from '../../assets/bag-cat.png'
import Foot from '../../assets/foot-cat.png'
import Beauty from '../../assets/beau.png'
import well from '../../assets/well-cat.png'
import jewe from '../../assets/jewe.png'

const CatSlider = () => {
  return (
    <div className='homeCatSLider'>
      <div className="container">
          <Swiper
        slidesPerView={7}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/" className='link'>
          <div className="item">
            <img src={fashion} alt="" />
            <h3>Fashion</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/" className='link'>
          <div className="item">
            <img src={Electronics} alt="" />
            <h3>Electronics</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/" className='link'>
          <div className="item">
            <img src={Bag} alt="" />
            <h3>Bags</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/" className='link'>
          <div className="item">
            <img src={Foot} alt="" />
            <h3>Footware</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/" className='link'>
          <div className="item">
            <img src={Beauty} alt="" />
            <h3>Beauty</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/" className='link'>
          <div className="item">
            <img src={well} alt="" />
            <h3>Wellness</h3>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/" className='link'>
          <div className="item">
            <img src={jewe} alt="" />
            <h3>Jewellry</h3>
          </div>
          </Link>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default CatSlider;
