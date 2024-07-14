import React from "react";
import { FaPhone, FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Header = () => {
  const menuList = [
    { id: 1, name: "Trang chủ", link: "/" },
    { id: 2, name: "Sản phẩm", link: "/menu" },
    { id: 3, name: "Về chúng tôi", link: "/about-us" },
    { id: 4, name: "Bài viết", link: "/blog" },
    { id: 5, name: "Liên hệ", link: "/contact" },
  ];
  return (
    <>
      <header className="border-b">
        <div className="container">
          <div className="flex justify-between p-5">
            <div className="flex items-center gap-2">
              <FaPhone></FaPhone>
              <p>0123 456 789</p>
            </div>
            <div className="flex items-center gap-8">
              <FaRegHeart className="w-7 h-6"></FaRegHeart>
              <FaRegUser className="w-7 h-6"></FaRegUser>
              <IoCartOutline className="w-7 h-7"></IoCartOutline>
            </div>
          </div>
        </div>
      </header>
      <div className="container mt-10">
        <div className="navbar justify-between bg-base-100 my-3">
          <div className="">
            <a>
              <img src="./images/logo.png" className="cursor-pointer" alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center px-1 gap-20 header-menu">
              {menuList.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => (isActive ? "text-red" : "hover:text-red")}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <FaSearch></FaSearch>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
