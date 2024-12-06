import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Recidencies.css";
import data from "../../Utils/slider.json";
import { sliderSettings } from "../../Utils/common";
function Recidencies() {
  return (
     <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className="orangeText">
                    Best Choices
                </span>
                <span className="primaryText">
                    Popular Residencies
                </span>
            </div>
            
            <Swiper {...sliderSettings}>
                <SliderButtons />
                {data.map((item,index)=>
                     (  
                        <SwiperSlide key={index}>
                            <div className="flexColStart r-card">
                                <img src={item.image} alt="" />
                            
                            <div className="secondaryText r-price">
                                <span style={{ color: "orange",padding:"10px",fontSize:"1.9rem" }}>$</span>
                                <span className="primaryText">
                                    {item.price}
                                </span>
                            </div>
                            <span className="primaryText">{item.name}</span>
                            <span className="secondaryText">{item.detail}</span>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
     </section>
  )
}
export default Recidencies;
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
      <div className=" flexCenter r-button">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    );
  };