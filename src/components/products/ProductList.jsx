import React, { useRef } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ProductList = () => {
  const sliderRef = useRef(null);

  const SampleNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        zIndex: 1,
        border: "2px solid #ccc",
        position: "absolute",
        top: "50%",
        right: "-30px",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}>
      <FaAngleRight style={{ color: "black", fontSize: "20px" }} />
    </div>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        zIndex: 1,
        border: "2px solid #ccc",
        position: "absolute",
        top: "50%",
        left: "-30px",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}>
      <FaAngleLeft style={{ color: "black", fontSize: "20px" }} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="py-3 relative">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
        <div>
          <ProductItem />
        </div>
      </Slider>
      <div className="absolute top-1/2 transform -translate-y-50% -right-8">
        <SampleNextArrow onClick={next} />
      </div>
      <div className="absolute top-1/2 transform -translate-y-50% -left-8">
        <SamplePrevArrow onClick={previous} />
      </div>
    </div>
  );
};

export default ProductList;
