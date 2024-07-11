import React from "react";
import Banner from "./Banner";
import NewProduct from "./NewProduct";
import BannerDiscount from "./BannerDiscount";
import SellingProduct from "./SellingProduct";
import PopularProduct from "./PopularProduct";
import ProductForYou from "./ProductForYou";
import Blog from "./Blog";
import MailService from "./MailService";
import Service from "./Service";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <NewProduct></NewProduct>
      <BannerDiscount></BannerDiscount>
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
