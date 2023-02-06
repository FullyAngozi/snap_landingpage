import React from "react";
import { heroimage, heroimageBig, clients } from "../constants";

const Hero = () => {
  return (
    <main className=" bg-primary sm:flex flex-row-reverse mx-auto">
      <div className=" flex  justify-center items-center md:my-0 my-10 p-6 md:p-0">
        <img src={heroimage} alt="talents" className=" w-[100%] h-[100%] md:hidden " />
        <img src={heroimageBig} alt="talents" className="hidden md:flex w-[400px]" />
      </div>

      <div className="  flex flex-col "> 
        <div className=" flex flex-col items-center text-center md:text-left md:items-start">
          <h1 className="font-bold ss:text-[68px] text-[52px] leading-tight">Make <br className="hidden md:flex"/> remote work</h1>
          <p className=" w-[400px] my-3 text-2xl text-Secondary leading-[30px] ">Get your team in sync, no matter your location. streamline processes, create team rituals, and watch productivity soar.</p>
          <span className=" py-3 px-6 border border-Secondary rounded-2xl bg-dark text-primary my-4">
            <a href="">Learn more</a>
          </span>
        </div>
        <div className=" flex items-center justify-around mb-20 w-[480px] mx-auto mt-auto md:mb-0 ">
          {clients.map(item => (
            <img src={item.logo} alt='logos' key={item.id} className=" mr-3" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
