import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-24">
        <h2 className="text-xl font-bold leading-normal max-lg:text-[16px]">{children}</h2>
        <div className="border w-1/2 max-lg:w-2/5"></div>
        <div className="text-red">Xem tất cả</div>
      </div>
    </div>
  );
};

export default Title;
