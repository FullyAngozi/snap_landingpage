import React, { useState } from "react";
import { logo, menuIcon, closeIcon } from "../constants";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className=" w-full flex py-6  items-center navbar ">
      <img src={logo} alt="snaplogo" className=" w-[124px] h-[32px]" />

      <section className=" ml-10  w-full flex justify-between items-center">
        <ul className=" sm:flex  items-center flex-1 hidden ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-Epilogue text-secondary font-normal text-xl mr-10 ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:flex justify-between gap-5 hidden  items-center text-Secondary  cursor-pointer ">
          <span className=" hover:text-dark ">
            <a href="">login</a>
          </span>
          <span className=" border-2 hover:text-dark py-3 px-4 rounded-xl hover:border-dark ">
            <a href="">Register</a>
          </span>
        </div>
      </section>

      <img
        src={toggle ? closeIcon : menuIcon}
        alt="menu"
        className=" sm:hidden w-[28px] h-[28px] object-contain z-10  "
        onClick={() => setToggle((current) => !current)}
      />

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } flex-col p-10 bg-white absolute top-0 right-0 my-2 min-w-[60%] h-[100vh] sidebar sm:hidden`}
      >
        <ul className="list-none flex  items-start flex-col  py-20">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] py-3
                text-secondary
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-col justify-between gap-5 items-center">
          <span>
            <a href="">login</a>
          </span>
          <span className=" border-2 hover:text-dark py-3  px-8 rounded-xl hover:border-dark ">
            <a href="">Register</a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
