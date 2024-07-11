import React from "react";
import Title from "../../components/title/Title";
import ProductItem from "../../components/products/ProductItem";

const PopularProduct = () => {
  return (
    <div>
      <div className="container">
        <Title>Sản phẩm phổ biến</Title>
        <div className="flex items-center justify-between gap-8 py-10 max-lg:flex-col">
          <div className="max-w-[800px] w-full max-lg:w-full">
            <img
              src="./images/banner4 1.png"
              className="w-full h-[400px] object-cover rounded-2xl"
              alt=""
            />
          </div>
          <div className="w-full  max-lg:w-full">
            <div className="grid grid-rows-1 gap-2 max-lg:grid-cols-3">
              <ProductItem className="horizontal" />
              <ProductItem className="horizontal" />
              <ProductItem className="horizontal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
