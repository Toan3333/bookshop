import React from "react";
import "../App.css";
import { FaSearchLocation, FaPhoneAlt, FaGoogle, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pt-10 pb-5">
      <div className="py-10 border">
        <div className="container">
          <div className="footer-list max-lg:grid-cols-2 max-lg:gap-20">
            <div className="">
              <img src="./images/logo.png" alt="Logo" />
              <div className="my-7 font-bold leading-normal">
                CỬA HÀNG PHÂN PHỐI SÁCH CHÍNH HÃNG
              </div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaSearchLocation className="w-5 h-5"></FaSearchLocation>
                    <div>Tầng 12, Nhà T, Quận 12, TPHCM</div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaPhoneAlt className="w-5 h-5"></FaPhoneAlt>
                    <div>123456789</div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaGoogle className="w-5 h-5"></FaGoogle>
                    <div>bansach@gmail.com</div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaFacebookF className="w-5 h-5"></FaFacebookF>
                    <div>Tầng 12, Nhà T, Quận 12, TPHCM</div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-lg:">
              <h3 className="font-bold leading-normal mb-8">Về chúng tôi</h3>
              <ul className="flex flex-col gap-5">
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Sản phẩm</a>
                </li>
                <li>
                  <a href="#">Hệ thống cửa hàng</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-bold leading-normal mb-8">Chính sách</h3>
              <ul className="flex flex-col gap-5">
                <li>
                  <a href="#">Chính sách đối tác</a>
                </li>
                <li>
                  <a href="#">Chính sách đổi trả</a>
                </li>
                <li>
                  <a href="#">Chính sách thanh toán</a>
                </li>
                <li>
                  <a href="#">Chính sách giao hàng</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-bold leading-normal mb-8">Tư vấn khách hàng</h3>
              <ul className="flex flex-col gap-5">
                <li>
                  <a href="#">Mua hàng 12345678</a>
                </li>
                <li>
                  <a href="#">Bản hành 12345678</a>
                </li>
                <li>
                  <a href="#">Khiếu nại 12345678</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-5 font-medium leading-normal">
        Copyright © . All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
