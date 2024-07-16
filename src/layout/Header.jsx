import React from "react";
import { FaPhone, FaRegUser, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { CiHeart, CiUser } from "react-icons/ci";
const Header = () => {
  const menuList = [
    { id: 1, name: "Trang chủ", link: "/" },
    { id: 2, name: "Sản phẩm", link: "/menu" },
    { id: 3, name: "Về chúng tôi", link: "/about-us" },
    { id: 4, name: "Bài viết", link: "/blog" },
    { id: 5, name: "Liên hệ", link: "/contact-us" },
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
              <CiHeart className="w-7 h-6"></CiHeart>
              <Link to="/sign-in">
                <CiUser className="w-7 h-6"></CiUser>
              </Link>
              <BsBag className="w-5 h-6" />
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
                    className={({ isActive }) => (isActive ? "text-main" : "hover:text-main")}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <label className="input input-bordered flex items-center gap-2 rounded-3xl">
            <input type="text" className="grow" placeholder="Search" />
            <FaSearch></FaSearch>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
