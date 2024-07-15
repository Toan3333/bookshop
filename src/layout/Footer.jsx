import React from "react";
import "../App.css";
import {
  FaSearchLocation,
  FaPhoneAlt,
  FaGoogle,
  FaFacebookF,
  FaFacebook,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pt-10 pb-5">
      <div className="py-10 border">
        <div className="container">
          <div className="footer-list max-lg:grid-cols-2 max-lg:gap-20">
            <div className="">
              <img src="./images/logo.png" alt="Logo" />
              <div className="mt-3 text-grayText mb-5 font-normal leading-normal">
                Bạn có câu hỏi? Liên hệ chúng tôi
              </div>
              <div className="mb-5 font-semibold leading-normal">(+84) 776 831 909</div>
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-white w-10 h-10 rounded-full bg-main">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-white w-10 h-10 rounded-full bg-main">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-white w-10 h-10 rounded-full bg-main">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-white w-10 h-10 rounded-full bg-main">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-lg:">
              <h3 className="font-semibold text-main text-[18px] leading-normal mb-8">
                Thông tin liên hệ
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="flex gap-2">
                    <FaMapMarkerAlt className="w-5 h-5" />
                    <div>Quận 12, Thành phố Hồ Chí Minh</div>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaClock className="w-5 h-5" />
                    <div className="leading-normal">
                      Thứ 2 - Thứ 6: 9:00 - 20:00 Thứ 7: 9:00 - 12:00
                    </div>
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
