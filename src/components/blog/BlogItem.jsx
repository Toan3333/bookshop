import React from "react";

const BlogItem = () => {
  return (
    <div>
      <div className="">
        <a href="#" className="w-full">
          <img src="./images/new 1.png" className="w-full object-cover" alt="" />
        </a>
        <div className="mt-2 flex flex-col gap-1">
          <p className="text-gray-400 font-light">00/00/0000</p>
          <h3 className="font-medium">
            <a href="#">10 quyển sách nên đọc một lần</a>
          </h3>
          <p className="text-gray-400 text-sm font-light leading-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, veniam.
          </p>
          <div>
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
