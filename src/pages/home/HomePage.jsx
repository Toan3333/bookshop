import React from "react";
import Banner from "./Banner";
import NewProduct from "./NewProduct";
import SellingProduct from "./SellingProduct";
import PopularProduct from "./PopularProduct";
import ProductForYou from "./ProductForYou";
import Blog from "./Blog";
import MailService from "./MailService";
import Service from "./Service";
import FlashSale from "./FlashSale";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <NewProduct></NewProduct>
      <FlashSale></FlashSale>
      <SellingProduct></SellingProduct>
      <PopularProduct></PopularProduct>
      <ProductForYou></ProductForYou>
      <Blog></Blog>
      <MailService></MailService>
      <Service></Service>
    </div>
  );
};

export default HomePage;
