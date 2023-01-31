import React, { useState } from 'react'
import { logo } from '../constants';
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className=' w-full flex py-6  items-center navbar bg-pink-300'>
      <img src={logo} alt="snaplogo" className=' w-[124px] h-[32px]' />
      <section className=' ml-10 bg-green-500 w-full flex justify-between items-center'>
        <ul className=' sm:flex  items-center flex-1 hidden '>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-Epilogue text-dark font-normal text-xl mr-10 ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}><a href={`#${nav.id}`}>{nav.title}</a></li>
          ))}
        </ul>
        <div className='sm:flex justify-between gap-5 hidden'>
          <span><a href="">login</a></span>
          <span><a href="">Register</a></span>
        </div>
      </section>
    </nav>
  )
}

export default Navbar