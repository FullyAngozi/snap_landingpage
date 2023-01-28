import React from 'react'
import logo from "../assets/images/logo.svg"
import Company from './Company'
import Features from './Features'
import iconClose from "../assets/images/icon-close-menu.svg"

const Navbar = () => {
  return (
    <nav className='  bg-white'>
        <div className=" w-[90%]  mx-auto flex justify-between p-4">
            <div>
                <img src={logo} alt="" />
            </div>
            <section className=' flex flex-col p-8 top-5 absolute bg-white h-screen right-0 w-[50%]'>
                <div className=' py-4'>
                    <ul>
                       <li className=' py-2'>Features</li>
                       <li>Company</li>
                        <a href="#" className=" py-2 block">Career</a>
                        <a href="#" className=" ">About</a>
                    </ul>
                </div>
                <div className=" flex flex-col ">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </section>
            <img src={iconClose} className=" w-[24px] z-10" alt="" />
        </div>
    </nav>
  )
}

export default Navbar