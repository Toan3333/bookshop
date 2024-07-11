import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="py-3">
      <div className="grid grid-cols-5 gap-3 max-lg:grid-cols-3 max-md:grid-cols-1">
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    </div>
  );
};

export default ProductList;
