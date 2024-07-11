import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineHeadphones } from "react-icons/md";
import { RiExchangeBoxLine } from "react-icons/ri";
const Service = () => {
  return (
    <div>
      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2">
            <div className="flex items-center gap-3 max-lg:justify-center">
              <MdOutlineLocalShipping className="text-red w-14 h-14"></MdOutlineLocalShipping>
              <div className="flex flex-col">
                <div className="font-semibold leading-normal">Miễn phí vận chuyển</div>
                <div className="font-normal leading-normal">Cho đơn từ 299K </div>
              </div>
            </div>
            <div className="flex items-center gap-3 max-lg:justify-center">
              <FaRegCreditCard className="text-red w-14 h-14"></FaRegCreditCard>
              <div className="flex flex-col">
                <div className="font-semibold leading-normal">Thanh toán COD</div>
                <div className="font-normal leading-normal">Thanh toán dễ dàng</div>
              </div>
            </div>
            <div className="flex items-center gap-3 max-lg:justify-center">
              <MdOutlineHeadphones className="text-red w-14 h-14"></MdOutlineHeadphones>
              <div className="flex flex-col">
                <div className="font-semibold leading-normal">Tư vấn miễn phí</div>
                <div className="font-normal leading-normal">Hỗ trợ tư vấn 24/7 </div>
              </div>
            </div>
            <div className="flex items-center gap-3 max-lg:justify-center">
              <RiExchangeBoxLine className="text-red w-14 h-14"></RiExchangeBoxLine>
              <div className="flex flex-col">
                <div className="font-semibold leading-normal">Đổi hàng tận nhà</div>
                <div className="font-normal leading-normal">Đổi hàng trong 7 ngày</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
