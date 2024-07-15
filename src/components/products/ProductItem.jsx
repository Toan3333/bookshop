import React from "react";
import { FaEye, FaShoppingCart } from "react-icons/fa";

const ProductItem = ({ className = "" }) => {
  const isHorizontal = className.includes("horizontal");

  return (
    <div className="pt-5">
      <div
        className={`p-2 relative mr-3 group overflow-hidden rounded-[30px] border bg-white cursor-pointer`}>
        <div
          className={`flex ${
            isHorizontal ? "flex-row justify-start max-lg:flex-col" : "flex-col"
          } items-center gap-4 text-center cursor-pointer py-6 px-3 rounded-md relative`}>
          <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-white absolute left-0 top-0">
            20%
          </div>
          <img
            src="./images/chiasetutraitim-bia.webp"
            className={`object-contain ${
              isHorizontal ? "w-[100px] h-[100px]" : "w-[190px] h-[190px]"
            }`}
            alt=""
          />
          <div
            className={`flex md:flex-none ${
              isHorizontal ? "flex-col text-left items-start" : "flex-col text-center items-center"
            } gap-1`}>
            <h3 className="text-[15px] text-text font-semibold leading-normal cursor-pointer">
              Để Con Được Ôm (2022)
            </h3>
            <p className="text-sm font-normal text-grayText leading-normal">
              Nguyễn Trí Đoàn, Uyên Bùi
            </p>
            <div className="flex items-center gap-3">
              <div className="text-red font-semibold leading-normal">96.000 đ</div>
              <div className="line-through text-grayText">120.000 đ</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaEye className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full" />
          <FaShoppingCart className="text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
