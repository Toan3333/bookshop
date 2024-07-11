import React from "react";

const ProductItem = ({ className = "" }) => {
  const isHorizontal = className.includes("horizontal");

  return (
    <div className={`p-2 relative group overflow-hidden`}>
      <div
        className={`flex ${
          isHorizontal ? "flex-row justify-start max-lg:flex-col" : "flex-col"
        }  items-center gap-4 text-center shadow-lg py-6 px-3 rounded relative`}>
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
          <h3 className="text-[15px] font-medium leading-normal cursor-pointer">
            Để Con Được Ôm (2022)
          </h3>
          <p className="text-sm font-light leading-normal">Nguyễn Trí Đoàn, Uyên Bùi</p>
          <div className="flex items-center gap-3">
            <div className="text-red text-[15px] font-medium">96.000 đ</div>
            <div className="line-through">120.000 đ</div>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 flex ${
          isHorizontal ? "items-end justify-center" : "items-center justify-center"
        } transform ${
          isHorizontal
            ? "translate-x-full group-hover:translate-x-0"
            : "translate-y-full group-hover:translate-y-0"
        } transition-transform duration-300 flex-col gap-2 ${isHorizontal ? "p-4" : ""}`}>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
          Xem chi tiết
        </button>
        <button className="bg-red text-white px-3 py-1 rounded hover:bg-green-700">Mua hàng</button>
      </div>
    </div>
  );
};

export default ProductItem;
