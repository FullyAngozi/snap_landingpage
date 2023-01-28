import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import Company from "./Company";
import Features from "./Features";
import iconClose from "../assets/images/icon-close-menu.svg";
import iconbar from "../assets/images/icon-menu.svg";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleClick = () => {
    setNav((nav) => !nav);
  };
  return (
    <nav className="  bg-white">
      <div className=" w-[90%]  mx-auto flex justify-between p-4 items-center  md:gap-10">
        <div >
          <img src={logo} alt=""  />
        </div>
        {nav ? (
          <img
            src={iconbar}
            alt="menu bar"
            onClick={handleClick}
            className="  cursor-pointer md:hidden"
          />
        ) : (
          <img
            src={iconClose}
            className=" w-[24px] z-10 cursor-pointer  md:hidden "
            alt="close menu"
            onClick={handleClick}
          />
        )}
        {!nav ? (
          <section className=" flex flex-col  p-8 top-5 absolute bg-white h-screen right-0 w-[50%]">
            <div className=" py-6 h-[50%]">
              <ul className=" flex flex-col justify-around  h-full">
                <li>
                  <a href="#" className=" ">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col ">
              <button className=" py-4  text-gray-400 hover:text-black ">
                Login
              </button>
              <button className=" border-2 rounded-md p-2  text-gray-400 hover:text-black hover:border-black">
                Register
              </button>
            </div>
          </section>
        ) : null}
        <div className=" flex justify-between w-full items-center">
            <ul className=" hidden md:flex div-menu ">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
            <div className="hidden md:flex  ">
                  <button className=" py-4  px-3 text-gray-400 hover:text-black ">
                    Login
                  </button>
                  <button type="submit" className=" border-2 rounded-md py-3 px-4  text-gray-400 hover:text-black hover:border-black">
                    Register
                  </button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
