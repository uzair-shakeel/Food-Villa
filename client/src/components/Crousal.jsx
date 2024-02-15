import React from "react";
import useFetch from "../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BASE_URL from "../utils/config";

const Crousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  const { apiData: foods, error } = useFetch(`${BASE_URL}/food`);

  // Check if foods is still undefined
  if (!foods) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="slider-container h-[150px] overflow-hidden w-auto">
      <Slider {...settings}>
        {foods.map((item) => (
          <div className="carousel-item h-full" key={item._id}>
            <img src={item.image} alt="Pizza" className="object-cover h-full" />
          </div>
        ))}
      </Slider>
    </div>

    // <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral max-h-[200px] rounded-box">

    // </div>
  );
};

export default Crousal;
