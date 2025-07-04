import React from "react";
import Slider from "../../Components/Slider"
import CatSlider from "../../Components/CatSlider";
import "../../index.css";
import { FaShippingFast } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="Slider">
        <Slider />
        <br/><br/><br/><br/>
        <CatSlider />

         <br/><br/>

        <section className="custom-section">
           <div className="custom-container">
              <div className="custom-shipping">
               <div className="custom-col1">
               <FaShippingFast className="custom-shipping-icon" />
               <span className="custom-shipping-text">Speedy Delivery</span>
               </div>

               <div className="custom-col2">
                <p>Speedy Delivery For All Order</p>
               </div>
              </div>
           </div>
        </section>

       
      </div>
    </>
  );
};

export default Home;