import React from "react";
import { FaCalendar, FaHeart, FaRegEdit, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";

const Favorite = () => {
  const profileMenuList = [
    { id: 1, name: "Tài khoản của tôi", icon: <FaUser />, link: "/profile" },
    { id: 2, name: "Sản phẩm yêu thích", icon: <FaHeart />, link: "/favorites" },
    { id: 3, name: "Đơn hàng của bạn", icon: <FaCalendar />, link: "/my-orders" },
    { id: 4, name: "Đăng xuất", icon: <FiLogOut />, link: "/logout" },
  ];

  return (
    <div className="py-10">
      <div className="container">
        <div className="flex gap-10">
          <div className="max-w-[300px] w-full">
            {/* Thông tin tài khoản */}
            <div className="flex items-center gap-2">
              <img
                src="./images/avatar.png"
                className="w-[50px] h-[50px] rounded-full"
                alt="Avatar"
              />
              <div>
                <h3 className="font-semibold leading-normal">booktopiavn@gmail.com</h3>
                <p className="flex items-center gap-1 text-grayText">
                  <FaRegEdit />
                  Sửa hồ sơ
                </p>
              </div>
            </div>
            {/* Danh sách menu */}
            <ul className="flex flex-col gap-7 mt-10">
              {profileMenuList.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-mainDark flex items-center gap-2 font-normal leading-normal"
                        : "flex items-center hover:text-mainDark gap-2 font-normal leading-normal"
                    }>
                    {item.icon}
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/5">
            <PageTitle title="Sản phẩm yêu thích" className="text-mainDark mb-2"></PageTitle>
            <div className="text-grayText leading-normal font-normal mb-5">
              Theo dõi thông tin đơn hàng của bạn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
