import React from "react";

const MailService = () => {
  return (
    <div>
      <div className="container">
        <div className="bg-green py-14 rounded-2xl">
          <div className="flex items-center justify-center flex-col gap-4">
            <h2 className="text-[22px] font-bold leading-normal">
              Nhận ngay <span className="text-red text-3xl">10%</span> ưu đãi khi mua hàng
            </h2>
            <div className="font-bold text-white">
              Nhập email và nhận ưu đãi 10% cho lần mua hàng tiếp theo
            </div>
            <div className="max-w-[400px] w-full relative">
              <input
                type="text"
                placeholder="Nhập email tại đây"
                className="input input-bordered input-md w-full"
              />
              <div className="absolute top-1 right-0 w-16 mr-4">
                <input
                  type="text"
                  className="bg-red text-center w-full h-10 text-white rounded py-2 px-3 cursor-pointer"
                  defaultValue="Gửi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailService;
