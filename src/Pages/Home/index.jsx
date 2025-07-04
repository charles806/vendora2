import React from "react";
import Slider from "../../Components/Slider"
import CatSlider from "../../Components/CatSlider";
import "../../index.css";

const Home = () => {
  return (
    <>
      <div className="Slider">
        <Slider />
        <br/><br/>
        <CatSlider />


        <br/><br/><br/>
      </div>
    </>
  );
};

export default Home;