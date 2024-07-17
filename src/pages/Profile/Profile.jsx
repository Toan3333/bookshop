import React from "react";
import { FaRegEdit } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex justify-between gap-5">
          <div className="max-w-[255px] w-full">
            <div className="flex items-center gap-2">
              <img src="./images/avatar.png" className="w-[50px] h-[50px] rounded-full" alt="" />
              <div className="">
                <h3 className="font-semibold leading-normal">booktopiavn@gmail.com</h3>
                <p className="flex items-center gap-1 text-grayText">
                  <FaRegEdit />
                  Sửa hồ sơ
                </p>
              </div>
            </div>
          </div>
          <div className="w-full"></div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
